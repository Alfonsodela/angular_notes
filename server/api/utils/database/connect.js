//Requerimos dotenv para acceder a las variables de entorno
const dotenv = require("dotenv");
dotenv.config();
//Requerimos mongoose para comunicarnos con la bd
const mongoose = require("mongoose");
//guardamos la url de Mongo en una variable
const mongoDb = process.env.MONGO_DB;
//Configuramos la función connect en un try catch para controlar los errores
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Connected with db: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error to connect with BD", error);
    }
};
//exportamos la funcion connect
module.exports = { connect };