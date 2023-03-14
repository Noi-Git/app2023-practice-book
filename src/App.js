import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'

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
    <div className='App'>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
