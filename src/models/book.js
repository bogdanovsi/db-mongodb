const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        writer: { type: Schema.Types.ObjectId, ref: 'Writer' },
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
Book.static({});

module.exports = mongoose.model('Book', Book);