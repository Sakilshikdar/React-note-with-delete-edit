import React, { useState } from 'react'
import EditModal from '../EditModal/EditModal';

const Notes = ({note}) => {
// console.log(note);
    const [modal, setModal] = useState([]);
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="border-none btn btn-xs bg-white text-primary normal-case">Edit</label>
                        {modal && <EditModal></EditModal>}
                        <button class="btn btn-primary">delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes