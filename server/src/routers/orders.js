const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');
const { Order } = require('../models');

const possibleKeys = [
    "_id"
];

MongooseCore.bindDefaultGetAll(router, '/all', Order);
MongooseCore.bindDefaultDeleteAll(router, '/all', Order);
MongooseCore.bindDefaultCreateModel(router, '/', Order);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Order, possibleKeys);
MongooseCore.bindUpdateModel(router, Order);

module.exports = router;