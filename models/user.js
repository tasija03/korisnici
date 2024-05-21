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

module.exports.model = userModel;

module.exports.getUser = async function (userName, userAge){
    const korisnici = await userModel.find({ime : userName}, {starost: userAge}).exec();
    if(korisnici.length > 0) return korisnici[0];
    else return null;
};

