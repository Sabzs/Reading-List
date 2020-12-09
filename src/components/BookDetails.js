import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);



  return (
    // <div className="bookList__bookDetails" >
    <li className="bookList__list-Details" >
      {/* <div className="bookList__title-AuthorDiv" > */}
      <h2 className="bookList__title" >{book.title}</h2>
      <h4 className="bookList__author" >{book.author}</h4>
      {/* </div> */}

    </li>
    // </div>
  )
}

export default BookDetails
