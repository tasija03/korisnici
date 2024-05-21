const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime: {
        type: String,
        required: true
    },

    prezime: String,

    starost: {
        type: Number,
        required: true
    },

    admin: {
        type: Boolean,
        default: false
    }
});

const userModel = mongoose.model('Korisnik', userShema);

module.exports = userModel;

module.exports.getUser = async function (ime, starost){

    const user = await userModel.findOne({ime: ime, starost: starost});

    return user;

}
