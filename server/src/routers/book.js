const express = require('express');
const book = express.Router();

const { Book } = require('../models');

book.get('/all', async function(req, res) {
    res.send(await Book.find());
})

book.get('/:name', async function(req, res) {
    res.send(await Book.findOneBook(req.params.name));
})

module.exports = book; 