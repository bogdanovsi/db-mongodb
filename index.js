const express = require('express')
const path = require('path');
const app = express();

require('./app/mongo');

const { findOneBook } = require('./app/mongo/book-fn');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'home', 'home.html'))
})

app.get('/book/:name', async function(request, response) {
  response.send(await findOneBook(request.params.name));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
