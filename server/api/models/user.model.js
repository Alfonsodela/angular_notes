
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Definimos el esquema de nuestro usuario
let userSchema = new Schema({
    name: {
        type: String, required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true //Solo puede haber un usuario con un e-mail único
    },
    password: {
        type: String, required: true,
    },
    emoji: {
        type: String
    },
    notes: [{ type: mongoose.Types.ObjectId, ref: 'Note' }],
}, {
    collection: 'users'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema); //Exportamos el esquema