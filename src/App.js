import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ]

    setBooks(updatedBook)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      // if (book.id !== id) {
      //   return book
      // }
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, newTitle }
      }
      return book
    })

    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
