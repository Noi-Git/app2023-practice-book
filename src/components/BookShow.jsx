import React, { useState, useContext } from 'react'
import BooksContext from '../context/books'
import BookEdit from './BookEdit'

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBookById, editBookById } = useContext(BooksContext)

  const handleDeleteClick = (id) => {
    deleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    // receive these props from BookEdit
    setShowEdit(false)
    editBookById(id, newTitle) // pass it to App.js
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
