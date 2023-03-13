import React, { useState } from 'react'

// Show add book form
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type='text' value={title} onChange={handleChange} />
      <button>Create!</button>
    </form>
  )
}

export default BookCreate
