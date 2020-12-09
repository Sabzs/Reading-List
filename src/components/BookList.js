import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext);



  return books.length ? (
    <div className="bookList" >
      <ul className="bookList__listContainer" >
        {books.map(book => {
          return (<BookDetails book={book} key={book.id} />);
        })}
      </ul>
    </div>

  ) : (
      <div className="bookList__emptyList" >
        <h4 className="bookList__emptyList-info" >you do not have any more books to read...!! </h4>
      </div>
    )
}

export default BookList
