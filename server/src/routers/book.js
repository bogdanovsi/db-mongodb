const express = require('express');
const book = express.Router();

const { Book } = require('../models');

const possibleKeys = [
    "book_cipher",
    "name",
    "circulation",
    "publication_date",
    "cost_price",
    "selling_price",
    "fee"
];

book.get('/all', async function(req, res) {
    res.send(await Book.find());
})

book.get('/:name', async function(req, res) {
    res.send(await Book.findOneBook(req.params.name));
})

book.post('/', async function(req, res) {
    const book = new Book({
        book_cipher: req.body.book_cipher,
        name: req.body.name,
        circulation: req.body.circulation,
        publication_date: req.body.publication_date,
        cost_price: req.body.cost_price,
        selling_price: req.body.selling_price,
        fee: req.body.fee
    })
    await book.save()
    res.send(book)
})

book.delete('/', async function(req, res) {
    const key = Object.keys(req.query).find(key => possibleKeys.includes(key))
    Book.deleteOne({ [key] : req.query[key] }, (err,result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})


book.delete('/all', async function(req, res) {
    Book.deleteMany({}, (err,result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

module.exports = book;