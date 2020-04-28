const express = require('express')
const path = require('path');
const app = express();
require('process');
require('dotenv').config();

// require('./mongo');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true });

const { findOneBook } = require('./mongo/book-fn');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.status(200).json({ success: true, message: 'Hello itmo!' });
})

app.get('/book/:name', async function(req, res) {
  res.send(await findOneBook(request.params.name));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})