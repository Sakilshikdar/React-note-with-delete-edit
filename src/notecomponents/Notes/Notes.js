import React, { useState } from 'react'
import EditModal from '../EditModal/EditModal';

const Notes = ({element, notes, setNotes , setEditId}) => {
    const [modal, setModal] = useState([]);
    const removedNotes =(id)=>{
       const changeNotes = notes.filter((note)=>note.id !== id)
       setNotes(changeNotes)
    }

    const editNotes = (id)=>{
        setEditId(id)
        notes.filter((elem)=>{
            if(elem.id===id){
                document.getElementById("editTitle").value=elem.title
                document.getElementById("editDesc").value=elem.desc
            }
        })
//         if(notes.filter((note)=>note.id === id)){
//             document.getElementById('edittitle').value=note.title
//             const dic=document.getElementById('editdesc').value=element.
//             desc
// console.log(dic);
//         } 
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title capitalize">{element?.title}</h2>
                    <p className='capitalize'>{element?.desc}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="border-none btn btn-xs bg-white text-primary normal-case" onClick={()=>editNotes(element.id)}>Edit</label>
                        {modal && <EditModal></EditModal>}
                        <button className="btn btn-primary" onClick={()=>removedNotes(element.id)}>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes