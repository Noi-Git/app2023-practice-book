import React from 'react'

const BookShow = ({ book, onDelete, onEdit }) => {
  const handleClick = (id) => {
    onDelete(book.id)
  }

  const handleEdit = (id, title) => {
    console.log('you click me')
    onEdit(id, title)
  }

  return (
    <div className='book-show'>
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
      {book.title}
    </div>
  )
}

export default BookShow
