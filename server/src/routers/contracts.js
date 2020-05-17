const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');

const { Contract } = require('../models');

const possibleKeys = [
    "_id"
];

MongooseCore.bindDefaultGetAll(router, '/all', Contract);
MongooseCore.bindDefaultDeleteAll(router, '/all', Contract);
MongooseCore.bindDefaultCreateModel(router, '/', Contract);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Contract, possibleKeys);
MongooseCore.bindUpdateModel(router, Contract);

router.get('/:name', async function(req, res) {
    res.send(await Contract.findOneBook(req.params.name));
})

module.exports = router;