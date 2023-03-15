import { createContext, useState } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title, //request body
    })

    const updatedBook = [...books, response.data]

    setBooks(updatedBook)
  }

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
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

  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>
}

export { Provider }
export default BooksContext

// Example of import both at the same time
// import BooksContext, {Provider} from './....
