import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText , setNoteText]=useState("");
    const wordlimit= 200;
    const handleChange=(event)=>{
        if(wordlimit-event.target.value.length>=0){
        setNoteText(event.target.value);}
    }
    const handleSaveChange=()=>{
        if(noteText.trim().length>0){
        handleAddNote(noteText)}
        setNoteText('')

    }
    return (
        <>
            <div className="note new">
                <textarea
                    rows="8"
                    cols="10"
                    placeholder="Type to add a note..."
                    value={noteText}
                    onChange={handleChange}>

                </textarea>
                <div className="note-footer" >
                    <small>  {wordlimit - noteText.length}remaining</small>
                    <button className="save" onClick={handleSaveChange}>Save</button>

                </div>

            </div>
        </>
    )
}
export default AddNote;