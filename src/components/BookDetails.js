import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);



  return (
    <li className="bookList__list-Details" onClick={() => { removeBook(book.id) }}>
      {/* <div className="bookList__title-AuthorDiv" > */}
      <h2 className="bookList__title" >{book.title}</h2>
      <h4 className="bookList__author" >{book.author}</h4>
      {/* </div> */}

    </li>
  )
}

export default BookDetails
