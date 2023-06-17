import React, { useState } from "react";
import "./notes.css";
import "../../../index.css";
import NotesList from "../../../components/notes/NotesList";
import { nanoid } from "@reduxjs/toolkit";

const Notes = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "First note",
    date: "15/04/2022"
  },
  {
    id: nanoid(),
    text: "Second note",
    date: "10/04/2022"
  },
  {
    id: nanoid(),
    text: "Third note",
    date: "20/04/2022"
  },
  {
    id: nanoid(),
    text: "Fourth note",
    date: "19/04/2022"
  },
  ]);
  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id:string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return <div id="page">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote } />
  </div>;
};
export default Notes;
