import React, { useState } from 'react'
import Form from './Form/Form'
import NoteHeader from './NoteHeader/NoteHeader'
import Notes from './Notes/Notes'

const NoteHome = () => {
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState([]);
    console.log(notes)
    return (

        <div>
            <NoteHeader />
            <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
            <Notes />
            {/* {
                notes.length === 0 && <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Message</h2>
                        <p>No notes here</p>
                    </div>
                </div> 
                } */}
                {notes.map((note)=>
                    <Notes  note={note}/>
                )}
        </div>
    )
}

export default NoteHome