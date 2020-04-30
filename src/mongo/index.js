require('dotenv');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));

module.exports = mongoose;