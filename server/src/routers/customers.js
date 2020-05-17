const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');

const { Customer } = require('../models');

const possibleKeys = [
    "_id",
    "customer_name",
    "address",
    "phone_number",
    "contact_person"
];

MongooseCore.bindDefaultGetAll(router, '/all', Customer);
MongooseCore.bindDefaultDeleteAll(router, '/all', Customer);
MongooseCore.bindDefaultCreateModel(router, '/', Customer);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Customer, possibleKeys);

router.get('/:name', async function(req, res) {
    res.send(await Customer.findOneBook(req.params.name));
})

module.exports = router;