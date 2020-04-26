const express = require('express')
const path = require('path');
const app = express();

const { findOneBook } = require('./app/mongo');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'home', 'home.html'))
})

app.get('/book/:name', async function(request, response) {
  response.send(await findOneBook(request.params.name));
})

app.get('/crypto-lab', function(request, response) {
  response.sendFile(path.join(__dirname, 'labs', 'crypto', 'answer'))
})
app.get('e2e-001.js', function(request, response) {
  response.sendFile(path.join(__dirname, '/e2e-001.js'))
})
app.get('/e2e-001_', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
