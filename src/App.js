import { useState } from 'react'
import './App.css'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      //request body
      title,
    })

    const updatedBook = [...books, response.data]

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
        return { ...book, title: newTitle }
      }
      return book
    })

    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
