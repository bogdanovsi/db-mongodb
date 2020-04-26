const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;