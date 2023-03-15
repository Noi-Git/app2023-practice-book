import React from 'react'
import ReactDOM from 'react-dom/client'
import BooksContext from './context/books'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
)
