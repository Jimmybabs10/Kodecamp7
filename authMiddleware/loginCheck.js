const jwt = require('jsonwebtoken');
const { registerModel } = require('../models/model');

function check (req, res, next){
    if (req.headers.authorization){
        if(req.headers.authorization.split(" ")[0] == "Bearer"){
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, process.env.jwtKey, function(error, payload){
                if(error) console.log(error);
                next();
            });
        }
    }
    else{
        res.send("You're not allowed in this route");
    }

}
module.exports = { check }