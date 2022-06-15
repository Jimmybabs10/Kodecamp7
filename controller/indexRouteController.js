const {registerModel} = require('../models/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function signup(req, res){
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new registerModel({
        username,
        password: hash
    });
    newUser.save(function(error){
        if(error) console.log(error);

        res.send('New user created successfully');
    });
}

async function login(req, res){
    const {username, password} = req.body;

    const user = await registerModel.findOne({username}, 'username password'); 

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if(passwordMatch == false){
        res.send("incorrect username or password");
    }else {
        console.log(process.env.jwtKey)
        jwt.sign({username: user.username}, process.env.jwtKey, function(error, token){
            res.send(token);
        })
        
    }
}

function general(req, res){
    res.send('This is the general route');
}

function restricted(req, res){
    res.send('This is the restricted route \n Verification Successful');
}

module.exports = { signup, login, general, restricted }