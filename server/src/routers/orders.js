const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');
const { Order } = require('../models');

const possibleKeys = [
    "_id"
];

// MongooseCore.bindDefaultGetAll(router, '/all', Order);
MongooseCore.bindDefaultDeleteAll(router, '/all', Order);
MongooseCore.bindDefaultCreateModel(router, '/', Order);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Order, possibleKeys);
MongooseCore.bindUpdateModel(router, Order);

router.get('/all', async (req, res) => {
    await Order.aggregate([
        {
            $lookup: {
                from: "customers",
                localField: 'customer',
                foreignField: "_id",
                as: "customer"
            }
        },
        {
            $lookup: {
                from: "books",
                localField: 'book',
                foreignField: "_id",
                as: "book"
            }
        },
       
    ]).exec().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;