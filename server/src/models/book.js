const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Writer = require('./writer').Writer;

const Book = new Schema(
    {
        writer: [Writer],
        book_cipher: { type: Number, default: '' },
        name: { type: String, default: '' },
        circulation: { type: Number, default: '' },
        publication_date: { type: Date, default: Date.now },
        cost_price: Number, 
        selling_price: Number, 
        fee: Number
    },
    { collection: 'books' }
);

Book.method({});

Book.static.findOneBook = async function findOneBook(name) {  
    return await Book.find({name});
}

Book.static.findAllRef = async function findAllRef() {
    return await Book.find({}).populate('writer');
}

module.exports = mongoose.model('Book', Book);