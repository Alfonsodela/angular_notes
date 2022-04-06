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

notesRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    return Note.findById(id)
    .then((note) => {
        if (!note) {
            const error = new Error("Note not found");
            error.status = 404;
            return next(error);
        }
        return res.status(200).json(note);
    })
    .catch((err) => {
        const error = new Error(err);
        error.status = 500;
        return next(error);
    });
});

module.exports = notesRouter;