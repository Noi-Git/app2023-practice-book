import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = (id) => {
    onDelete(book.id)
  }

  const handleEditClick = () => {
    console.log('you click me')
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    // receive these props from BookEdit
    setShowEdit(false)
    onEdit(id, newTitle) // pass it to App.js
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    // if the show edit = true, show the <BookEdit/>
    content = <BookEdit book={book} onSubmit={handleSubmit} />
    // pass book props to BookEdit to display the title in the Edit input field
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
