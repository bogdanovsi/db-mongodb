const express = require('express')
const allRouters = express.Router();

allRouters.use('/books', require('./books'));
allRouters.use('/writers', require('./writers'));
allRouters.use('/customers', require('./customers'));
allRouters.use('/orders', require('./orders'));
allRouters.use('/contracts', require('./contracts'));

module.exports = allRouters;