import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title, //request body
    })

    const updatedBook = [...books, response.data]

    setBooks(updatedBook)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      // if (book.id !== id) { return book }
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })
    // console.log(response)

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
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
