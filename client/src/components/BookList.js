import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);

  return books.length ? (
    <div className="bookList" >
      {books.map(book => {
        return (
          <div className="bookList__booklist-wrapper" key={book.id}>

            <div className="bookList__list" >
              <h2 className="bookList__title" >{book.title}</h2>
              <h4 className="bookList__author" >{book.author}</h4>
            </div>

            <div className="bookList__edit-delete-wrapper" >
              <button className="bookList__edit-btn" >
                <Link to={`/editbook/${book.id}`} >Edit </Link>
              </button>
              <button className="bookList__delete-btn"
                onClick={() => deleteBook(book.id)}
              > Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="emptyList" >
      <div className="emptyList__infoDiv"  >
        <h3 className="emptyList__info" > <span>Hooray...!!</span> your list is empty, please add some more books. </h3>
      </div>
    </div>
  )




}

export default BookList
