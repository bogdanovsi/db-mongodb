const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contract = new Schema(
    {
        writer: [{ type: Schema.Types.ObjectId, ref: 'Writer' }],
        number_contract: Number,
        created: Date,
        expiration_date: Date,
        annulment: Boolean,
        annulment_date: Date,
    }, 
    { collection: 'contracts' }
);
Contract.method({});
Contract.static({});

module.exports = mongoose.model('Contract', Contract);