const express = require("express");
const Note = require('../models/note.model');

const notesRouter = express.Router();

notesRouter.get('/', (req, res, next) => {
    return Note.find()
        .then(notes => {
            return res.status(200).json(notes);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

notesRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Note.findById(id)
        .then((note) => {
            if (!note) {
                const error = new Error('Note not found');
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(note);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

notesRouter.post('/' ,(req, res, next) => {
    console.log('Note received', req.body);
    const newNote = new Note({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });
    return newNote.save()
        .then(() => {
            return res.status(201).json(newNote);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

notesRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;
    return Note.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(noteUpdated => {
            return res.status(200).json(noteUpdated);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

notesRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    return Note.findByIdAndDelete(id)
        .then(() => {
            return res.status(200).json(`Note with id: ${id} deleted`);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

module.exports = notesRouter;