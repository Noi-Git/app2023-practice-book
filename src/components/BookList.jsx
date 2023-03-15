import React, { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'

const BookList = () => {
  const { books } = useContext(BooksContext)

  const renderedBook = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })

  return <div className='book-list'>{renderedBook}</div>
}

export default BookList
