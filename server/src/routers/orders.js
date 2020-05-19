const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

const fullCost = (bookCopyCount, books) => {
    return books.reduce((price, book) => price + (book.cost_price * bookCopyCount) + book.fee, 0);
}

const fullSell = (bookCopyCount, books) => {
    return books.reduce((price, book) => price + (book.selling_price * bookCopyCount), 0);
}

const getCostInfo = (order) => {    
    return {
        data: order,
        full_cost: fullCost(order.oredered_book_copies_number, order.book),
        sell_cost: fullSell(order.oredered_book_copies_number, order.book)
    }
}

router.get('/data/:orderId', async (req, res) => {
    Order.aggregate([
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
        }
    ])
    .match({ _id: mongoose.Types.ObjectId(req.params.orderId) })
    .limit(1)
    .exec(function (err, orders) {   
        res.send(orders[0] ? getCostInfo(orders[0]) : null);
    });
});

router.get('/data', async (req, res) => {
    Order.aggregate([
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
        }
    ])
    .exec(function (err, orders) {   
        res.send(orders.map(order => getCostInfo(order)));
    });
});

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