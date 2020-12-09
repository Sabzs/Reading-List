import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);



  return (
    <div className="bookList__bookDetails" >
      <li className="bookList__listItems" >
        <div className="bookList__title-AuthorDiv" >
          <h2 className="bookList__title" >{book.title}</h2>
          <h3 className="bookList__author" >{book.author}</h3>
        </div>

      </li>
    </div>
  )
}

export default BookDetails
