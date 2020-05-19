const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');
const { Writer, Book } = require('../models');
const mongoose = require('mongoose');

const possibleKeys = [
    "_id"
];

MongooseCore.bindDefaultGetAll(router, '/all', Writer);
MongooseCore.bindDefaultDeleteAll(router, '/all', Writer);
MongooseCore.bindDefaultCreateModel(router, '/', Writer);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Writer, possibleKeys);
MongooseCore.bindUpdateModel(router, Writer);

router.get('/:writerId/books', async function(req, res) {
    const books = await Book.aggregate([
        {
            $lookup: {
                from: "writers",
                localField: 'writer',
                foreignField: "_id",
                as: "writer"
            }
        }
    ]).match({ 
        'writer._id': mongoose.Types.ObjectId(req.params.writerId)
    });

    res.send(books);
})

router.get('/:name', async function(req, res) {
    res.send(await Writer.find({ name: req.params.name }));
})

module.exports = router;