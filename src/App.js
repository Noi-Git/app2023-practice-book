import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBook = [...books, { id: 123, title: title }]

    setBooks(updatedBook)
  }

  return (
    <div className='App'>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
