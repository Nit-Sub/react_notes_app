 import { nanoid } from "nanoid";
import React, { useState } from "react";
import NoteList from "./components/NotesList";
 const App=()=>{
    const [notes, setNotes]= useState([{
        id:nanoid(),
        text :'This is my first note',
        date:"09/28/2022",
    },
    {
        id:nanoid(),
        text :'This is my second note',
        date:"05/28/2022",
    },
    {
        id:nanoid(),
        text :'This is my  note',
        date:"04/28/2022",
    },{
        id:nanoid(),
        text :'This is my  note',
        date:"09/28/2022",
    }])
    return (
        <>
        <div className="container">
            <NoteList
            notes={notes}/>
        </div>
        </>
    )
 }
 export default App;