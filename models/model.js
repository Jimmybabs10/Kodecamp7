const mongoose = require('mongoose');
const schema = mongoose.Schema;

const signUpSchema = new schema({
    username: String,
    password: String
});

const registerModel = mongoose.model('kodecampTaskSeven', signUpSchema);

module.exports = { registerModel };