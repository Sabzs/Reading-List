import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);



  return (
    <li className="bookList__list-Details" onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <h2 className="bookList__title" >{book.title}</h2>
      <h4 className="bookList__author" >{book.author}</h4>
    </li>
  )
}

export default BookDetails
