const mongoose = require("mongoose");
const connect = require("../utils/database/connect");
const Note = require("../models/note.model");

const notes = [
  {
    title: "HTML",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "10.03.21",
  },
  {
    title: "CSS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "15.04.21",
  },
  {
    title: "SCSS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "20.05.21",
  },
  {
    title: "JS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "25.06.21",
  },
  {
    title: "MONGO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "30.07.21",
  },
  {
    title: "EXPRESS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "1.08.21",
  },
  {
    title: "NODE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "3.09.21",
  },
  {
    title: "ANGUlAR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "7.10.21",
  },
  {
    title: "REACT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "13.11.21",
  },
  {
    title: "MySQL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "16.12.21",
  },
];

const notesDocuments = notes.map((note) => new Note(note));

connect.connect()
    .then(async () => {
        const allNotes = await Note.find();
        if (allNotes.length > 0) {
            await Note.collection.drop();
        }
    })
    .catch((err) => console.error(`Error deleting information from the DB: ${err}`))

    .then(async () => {
        await Note.insertMany(notesDocuments);
    })
    .catch((err) => console.error(`Error creating document en DB: ${err}`))

    .finally(() => moongoose.disconnect());
