import React, { useState } from 'react'
import EditModal from './EditModal/EditModal'
import Form from './Form/Form'
import NoteHeader from './NoteHeader/NoteHeader'
import Notes from './Notes/Notes'

const NoteHome = () => {
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState(getNotes);
    const [editId, setEditId] = useState("")
    // console.log(notes)
    localStorage.setItem("notes", JSON.stringify(notes))
    return (

        <div>
            <EditModal editId={editId} notes={notes} setNotes={setNotes} />
            <NoteHeader />
            <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
            <Notes />
            {
                notes.length === 0 && <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Message</h2>
                        <p>No notes here</p>
                    </div>
                </div>
            }
            {notes.map((note) =>
                <Notes key={note.id} element={note} notes={notes} setNotes={setNotes} setEditId={setEditId}/>
            )}
        </div>
    )
    function getNotes() {
        const note = JSON.parse(localStorage.getItem('notes'))
        if (note) {
            return note
        } else {
            return []
        }
    }
}

export default NoteHome