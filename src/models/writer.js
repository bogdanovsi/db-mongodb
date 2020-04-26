const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Writer = new Schema(
    {
        passport_number: { type: Number, default: '' },
        surname: { type: String, default: '' },
        name: { type: String, default: '' },
        patronymic: { type: String, default: '' },
        address: { type: String, default: '' },
        phone: { type: String, default: '' }
    },
    { collection: 'writers' }
);

Writer.method({});
Writer.static({});

module.exports = mongoose.model('Writer', Writer);