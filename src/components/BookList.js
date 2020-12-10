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
      <div className="emptyList" >
        <h3 className="emptyList-info" > <span>Hooray...!!</span> your list is empty, please add some more books. </h3>
      </div>
    )
}

export default BookList
