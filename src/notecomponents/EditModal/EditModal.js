import React from 'react'

const EditModal = ({ editId, notes, setNotes }) => {


    const updateHandler = (e) => {
        e.preventDefault()
        const updateNotes = notes.map((elem) => {
            if (editId === elem.id) {
                return (
                    {
                        ...elem,
                        title: document.getElementById("editTitle").value,
                        desc: document.getElementById("editDesc").value
                    }
                
                )
            }else {
                return elem
            }
        })
        setNotes(updateNotes)
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card w-[95%] shadow-sm bg-base-100">
                        <div className="">
                            <h1>Edit notes</h1>
                            <form onSubmit={updateHandler} className='grid grid-cols-1 gap-1 mt-5'>
                                <div className='flex justify-center'><p className='mt-2 mr-1'>Title: </p>
                                    <input id='editTitle' name='name' type="text" className="mt-0 pt-0 input input-bordered w-full " /></div>
                                <div className='flex justify-center'>
                                    <p className='mt-2 mr-1'>Note:</p>
                                    <input id='editDesc' name='email' type="text" className="input input-bordered w-full " />
                                </div>
                                <input type="submit" value='Edit' className="btn btn-secondary w-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default EditModal