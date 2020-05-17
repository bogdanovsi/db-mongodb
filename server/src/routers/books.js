const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');

const { Book } = require('../models');

const possibleKeys = [
    "_id",
    "book_cipher",
    "name",
    "circulation",
    "publication_date",
    "cost_price",
    "selling_price",
    "fee"
];

MongooseCore.bindDefaultGetAll(router, '/all', Book);
MongooseCore.bindDefaultDeleteAll(router, '/all', Book);
MongooseCore.bindDefaultCreateModel(router, '/', Book);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Book, possibleKeys);

router.get('/:name', async function(req, res) {
    res.send(await Book.findOneBook(req.params.name));
})

module.exports = router;