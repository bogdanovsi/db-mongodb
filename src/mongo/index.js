require('dotenv');

const mongoose = require('mongoose');
mongoose.connect(progress.env.MONGODB_URL || 'mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;