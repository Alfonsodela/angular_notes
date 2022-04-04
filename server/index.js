//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importamos la conexion a la db
const { connect } = require("./api/utils/database/connect");

// Express APIs
const api = require('./api/routes/user.routes');
const notesRouter = require('./api/routes/notes.routes');

//Ejecutamos la funcion que conecta con la db
connect();

// Configuración de express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Aquí indicamos las rutas a usar
app.use('/public', express.static('public'));


app.use('/api', api);
app.use('/api/notes', notesRouter);

// Definimos el puerto desde el dotenv y si no lo hubiera el 4000
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Connected to http://localhost:${port}`);
})

// Manejamos los errores
app.use('*', (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    return next(error);
});

app.use((err, _req, res, _next) => {
    return res
        .status(err.status || 500)
        .json(err.message || 'Error on server');
});
