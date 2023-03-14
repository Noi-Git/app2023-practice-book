import React, { useState } from 'react'

const BookEdit = ({ onEdit }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Hey!, you clicked me. Here is you title:', title)
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type='text'
        className='input'
        value={title}
        onChange={handleChange}
      />
      <button className='button is-primary'>Save Chenge</button>
    </form>
  )
}

export default BookEdit
