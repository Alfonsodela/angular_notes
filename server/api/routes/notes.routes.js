const express = require("express");
const Note = require("../models/note.model");
const notesRouter = express.Router();

// Configurando routing y controllers
notesRouter.get("/", (req, res, next) => {
    return Note.find()
    .then((notes) => {
        return res.status(200).json(notes);    
    })
    .catch((err) => {
        const error = new Error(err);
        error.status = 500;
        return next(error);
    });
});

module.exports = notesRouter;