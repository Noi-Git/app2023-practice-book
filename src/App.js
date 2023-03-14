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

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
