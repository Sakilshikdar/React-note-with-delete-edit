import React from 'react'

export const NoteHeader = () => {
    const logo = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'

    return (
        <div className='w-[75%] mx-auto'>
            <div className="navbar bg-slate-500 h-16">
                <div className="navbar flex ">
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl text-red-300 font-serif w-full mt-3">HexaNote</a>
                </div>
            </div>
        </div>
    )
}

export default NoteHeader