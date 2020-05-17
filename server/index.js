const express = require('express')
const path = require('path');
const app = express();
require('process');
require('dotenv').config();

require('./src/mongo');

app.use(express.json());
app.listen(process.env.PORT || 5000);
const staicFiles = express.static(path.join(__dirname, '../client/build'));
app.use(staicFiles);

// routers
app.use(require('./src/routers'))

// another routers
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});