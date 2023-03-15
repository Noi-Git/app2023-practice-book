import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
