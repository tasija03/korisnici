const userModel = require('../models/user');

module.exports.displayUser = async function (req, res, next){

    const users = await userModel.find();
    res.render('userList', {korisnik: users});
    
}
