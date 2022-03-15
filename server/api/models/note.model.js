const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: string, required: true },
  description: { type: string, required: true },
  date: { type: string, required: true },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;