const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        customer_name: { type: String, default: '' },
        address: { type: String, default: '' },
        phone_number: { type: String, default: '' },
        contact_person: { type: String, default: '' }
    }, { collection: 'customers' }
);

Customer.method({});
Customer.static({});

module.exports = mongoose.model('Customer', Customer);