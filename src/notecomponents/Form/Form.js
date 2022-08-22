import React, { useState } from 'react'
import './Form.css'

const Form = ({ title, settitle, desc, setDesc, notes, setNotes }) => {
  const [showTextField, setShowTextField] = useState(false);

  const onTextAreaClick = () => {
    setShowTextField(true);
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      settitle(value)
    } else {
      setDesc(value)
    }
    // if ('') {
    //   settitle(e.target.value)
    // }
    // else {
    //   setDesc(e.target.value)
    // }
  }

  const addNotesHandler = (e) => {
    e.preventDefault();
    if (title !== '' && desc !== '') {
      setNotes((note) => {
        return (
          [...note, {
            title: title,
            desc: desc,
            id: new Date().getTime()
          }]
        )
      })
    }
    setDesc('')
    settitle('')
  }

  return (
    <div className="mt-10
    ">
      <div className='container lg:w-[600px] w-10/12 mt-5'>
        {
          showTextField &&
          <input
            className='mb-3 border-none'
            placeholder='Title'
            variant='standard'
            onChange={inputHandler}
            id={title}
            name='title'
            value={title}
          />
        }
        <textarea
          className='border-none mb-3 hover:border-none'
          placeholder='Take a note...'
          variant='standard'
          onClick={onTextAreaClick}
          onChange={inputHandler}
          name='desc'
          value={desc}
        ></textarea>
        <div>
          <button onClick={addNotesHandler}>add</button>
        </div>
      </div>
    </div>
  )
}

export default Form;