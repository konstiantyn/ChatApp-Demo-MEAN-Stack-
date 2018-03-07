var UserSchema = require('../schemas/user_schema.js');

module.exports.edit = function (req, res) {
    var userInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        plz: req.body.plz,
        ort: req.body.ort,
        birth_date: req.body.birth_date,
        telefon: req.body.telefon,
        description: req.body.description,
        email: req.body.email,
        groupid: req.body.groupid
    }

    var query = { 'username': req.body.username }

    UserSchema.update(query, userInfo, function (err, doc) {
        if (err) {
            res.status(401).json(err);
        }
        res.status(201).json(doc);
    })
}

module.exports.editProfilImg = function (req, res) {
    var userInfo = {
        profilPathImg: req.body.profilPathImg
    }

    var query = { 'username': req.body.username }

    UserSchema.update(query, userInfo, function (err, doc) {
        if (err) {
            res.status(401).json(err);
        }
        res.status(201).json(doc);
    })
}