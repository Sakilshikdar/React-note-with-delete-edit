import React from 'react'

const EditModal = () => {
  // const { id, name, location, email, role } = user;

    const handleSubmit = (even) => {
        even.preventDefault();
        const updateing = {
            name: even.target.name.value,
            email: even.target.email.value,
            location: even.target.location.value,
            role: even.target.role.value,
        }
        console.log(updateing);
    }
    return (
        <div>
          
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="card w-[95%] shadow-sm bg-base-100">
                        <div class="">
                        <h1>Edit notes</h1>
                            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1 mt-5'>
                                <div className='flex justify-center'><p className='mt-2 mr-1'>Title: </p>
                                    <input id='editTitle' placeholder={''} name='name' type="text" className="mt-0 pt-0 input input-bordered w-full " /></div>
                                <div className='flex justify-center'>
                                    <p className='mt-2 mr-1'>Note:</p>
                                    <input id='editDesc' name='email' placeholder={''} type="text" className="input input-bordered w-full " />
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