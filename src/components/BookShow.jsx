import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteClick = (id) => {
    onDelete(book.id)
  }

  const handleEditClick = (id, title) => {
    // console.log('you click me')
    setShowEdit(!showEdit)
    onEdit(id, title)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    // if the show edit = true, show the <BookEdit/>
    content = <BookEdit />
  }

  return (
    <div className='book-show'>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <div>{content}</div>
    </div>
  )
}

export default BookShow
