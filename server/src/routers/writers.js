const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');
const { Writer } = require('../models');

const possibleKeys = [
    "_id"
];

MongooseCore.bindDefaultGetAll(router, '/all', Writer);
MongooseCore.bindDefaultDeleteAll(router, '/all', Writer);
MongooseCore.bindDefaultCreateModel(router, '/', Writer);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Writer, possibleKeys);
MongooseCore.bindUpdateModel(router, Writer);

router.get('/:name', async function(req, res) {
    res.send(await Writer.find({ name: req.params.name }));
})

module.exports = router;