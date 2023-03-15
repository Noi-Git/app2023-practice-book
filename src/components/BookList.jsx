import React, { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBook = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return <div className='book-list'>{renderedBook}</div>
}

export default BookList
