const userModel = require('../models/user');

module.exports.displayUser = async function (req, res, next){

    try{

        const userObject = await models.getUser(req.body.ime, req.body.starost);

        return res.render('userList.ejs', {
            user : userObject
        });
    }
    catch(err){
        next(err);
    }
};
