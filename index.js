const express = require('express')
const path = require('path');
const app = express();
require('process');
require('dotenv').config();

require('./src/mongo');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

app.use('book', require('./src/routers/book.js'));
app.use('writer', require('./src/routers/writer.js'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})