const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema(
    {
        book: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
        customer : [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
        receipt_date: { type: Date, default: Date.now },
        completion_date: { type: Date, default: Date.now },
        oredered_book_copies_number: Number
    },
    { collection: 'orders' }
);

Order.method({});
Order.static({});

module.exports = mongoose.model('Order', Order);