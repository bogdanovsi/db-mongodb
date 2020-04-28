require('dotenv');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;