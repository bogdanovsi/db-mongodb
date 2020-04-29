const express = require('express');
const writer = express.Router();

const { Writer } = require('../models');

writer.get('/create', async function(req, res) {
    res.send(await Writer.loadDB());
})

writer.get('/all', async function(req, res) {
    res.send(await Writer.find());
})

writer.get('/:name', async function(req, res) {
    res.send(await Writer.findOneBook(request.params.name));
})

module.exports = writer;