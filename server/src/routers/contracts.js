const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');
const mongoose = require('mongoose');
const { Contract, Book } = require('../models');

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

const processingContract = async (contract) => {        
    const bookInContract = await Book.aggregate([
        {
            $lookup: {
                from: "writers",
                localField: 'writer',
                foreignField: "_id",
                as: "writer"
            }
        }
    ]).match({ 
        'writer._id': mongoose.Types.ObjectId(contract.writer[0]._id),
        publication_date: {$gte: new Date(contract.created), $lt: new Date(contract.expiration_date)}
    })
    .limit(1)

    return {
        data: contract,
        books: bookInContract
    }
}

router.get('/data/:contractId', async (req, res) => {
    const results = await Contract.aggregate([
        {
            $lookup: {
                from: "writers",
                localField: 'writer',
                foreignField: "_id",
                as: "writer"
            }
        }
    ])
    .match({ _id: mongoose.Types.ObjectId(req.params.contractId) })
    .limit(1)

    res.send(results[0] ? await processingContract(results[0]) : null);
});

router.get('/:name', async function(req, res) {
    res.send(await Contract.findOneBook(req.params.name));
})

module.exports = router;