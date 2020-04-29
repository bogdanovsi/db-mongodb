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
Writer.static.loadDB = () => {
    const writer = [
  {
    "_id": "5ea8c29076a1493c19b8fb71",
    "pasport_number": "6095 259530",
    "surname": "Acosta",
    "name": "Kelley",
    "patronymic": "Stafford",
    "Address": "Preston Court, Hollins, Maryland, 1361",
    "phone": "(926) 410-3396"
  },
  {
    "_id": "5ea8c290d12c436c753d656a",
    "pasport_number": "6733 224089",
    "surname": "Kerr",
    "name": "Cote",
    "patronymic": "Silva",
    "Address": "Bragg Street, Harleigh, Kansas, 3268",
    "phone": "(911) 463-3135"
  },
  {
    "_id": "5ea8c290bc2cc3c2943be260",
    "pasport_number": "2325 451844",
    "surname": "Campos",
    "name": "Clarissa",
    "patronymic": "Durham",
    "Address": "Bergen Street, Utting, North Carolina, 889",
    "phone": "(949) 553-3732"
  },
  {
    "_id": "5ea8c29095e5188e78560b86",
    "pasport_number": "7364 934778",
    "surname": "Pope",
    "name": "Taylor",
    "patronymic": "Jacobson",
    "Address": "Dorset Street, Denio, Indiana, 846",
    "phone": "(951) 519-3509"
  },
  {
    "_id": "5ea8c290f2ec9048f49fa48a",
    "pasport_number": "5680 614113",
    "surname": "Velez",
    "name": "Harris",
    "patronymic": "Bush",
    "Address": "Fair Street, Catharine, Ohio, 1663",
    "phone": "(901) 455-2554"
  },
  {
    "_id": "5ea8c290cd54f66c4ecb8bfc",
    "pasport_number": "6587 297388",
    "surname": "Rivers",
    "name": "Lindsay",
    "patronymic": "Harrington",
    "Address": "Langham Street, Harold, Arizona, 2419",
    "phone": "(951) 562-3765"
  },
  {
    "_id": "5ea8c290d5de84f5156caa16",
    "pasport_number": "5275 280803",
    "surname": "Rocha",
    "name": "Gibbs",
    "patronymic": "Spencer",
    "Address": "Surf Avenue, Kidder, Northern Mariana Islands, 724",
    "phone": "(918) 427-2291"
  },
  {
    "_id": "5ea8c290834fba85346fc9b7",
    "pasport_number": "8160 804913",
    "surname": "Miles",
    "name": "Hannah",
    "patronymic": "Chapman",
    "Address": "Orange Street, Gratton, Washington, 7989",
    "phone": "(912) 523-2322"
  }];

    const Writer = mongoose.model('Writer', Writer);

    writer.forEach(async w => {
        let writer = new Writer(w);
        await writer.save();
    })
}

module.exports = mongoose.model('Writer', Writer);