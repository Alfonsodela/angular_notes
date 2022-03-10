
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Definimos el equema de nuestro usuario
let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true //Solo puede haber un usuario con un e-mail único
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema); //Exportamos el esquema