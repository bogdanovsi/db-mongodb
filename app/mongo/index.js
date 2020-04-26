const { Book } = require('../models');

module.exports.findOneBook = async function findOneBook(name) {  
    return await Book.find({name});
}