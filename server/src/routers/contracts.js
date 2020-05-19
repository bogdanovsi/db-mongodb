const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');

const { Contract } = require('../models');

const possibleKeys = [
    "_id"
];

// MongooseCore.bindDefaultGetAll(router, '/all', Contract);
MongooseCore.bindDefaultDeleteAll(router, '/all', Contract);
MongooseCore.bindDefaultCreateModel(router, '/', Contract);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Contract, possibleKeys);
MongooseCore.bindUpdateModel(router, Contract);

router.get('/all', async (req, res) => {
    await Contract.aggregate([
        {
            $lookup: {
                from: "writers",
                localField: 'writer',
                foreignField: "_id",
                as: "writer"
            }
        }
    ]).exec().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/:name', async function(req, res) {
    res.send(await Contract.findOneBook(req.params.name));
})

module.exports = router;