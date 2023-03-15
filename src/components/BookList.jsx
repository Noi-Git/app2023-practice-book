import React, { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'

const BookList = ({ books, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(BooksContext)

  const renderedBook = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return (
    <div className='book-list'>
      {count}
      <button className='button is-primary' onClick={incrementCount}>
        increment count
      </button>
      {renderedBook}
    </div>
  )
}

export default BookList
