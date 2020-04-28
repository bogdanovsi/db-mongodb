const express = require('express');
const book = express.Router();

const { findOneBook } = require('../mongo/book-fn');

book.get('/:name', async function(req, res) {
    res.send(await findOneBook(request.params.name));
})

module.exports = book;