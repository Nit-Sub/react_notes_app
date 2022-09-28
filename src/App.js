import { nanoid } from "nanoid";
import React, { useState } from "react";
import NoteList from "./components/NotesList";
const App = () => {
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: 'This is my first note',
        date: "09/28/2022",
    },
    {
        id: nanoid(),
        text: 'This is my second note',
        date: "05/28/2022",
    },
    {
        id: nanoid(),
        text: 'This is my  note',
        date: "04/28/2022",
    }, {
        id: nanoid(),
        text: 'This is my  note',
        date: "09/28/2022",
    }])
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [
            ...notes,
            newNote
        ]
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes)
    }



return (

    <div className="container">
        <NoteList
            notes={notes}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote} />
    </div>

)
}
export default App;