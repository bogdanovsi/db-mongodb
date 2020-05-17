const express = require('express');
const customer = express.Router();

const { Customer } = require('../models');

const possibleKeys = [
    "_id",
    "customer_name",
    "address",
    "phone_number",
    "contact_person"
];

customer.get('/all', async function(req, res) {
    res.send(await Customer.find());
})

customer.get('/:name', async function(req, res) {
    res.send(await Customer.findOneBook(req.params.name));
})

customer.post('/', async function(req, res) {
    const instance = new Customer({
        customer_name: req.body.customer_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        contact_person: req.body.contact_person,
    })
    await instance.save()
    res.send(instance)
})

customer.delete('/', async function(req, res) {
    const key = Object.keys(req.query).find(key => possibleKeys.includes(key))
    Customer.deleteOne({ [key] : req.query[key] }, (err,result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

customer.delete('/all', async function(req, res) {
    Customer.deleteMany({}, (err,result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

module.exports = customer;