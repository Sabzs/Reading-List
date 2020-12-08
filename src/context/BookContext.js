import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: uuidv4() },
    { title: "the final empire", author: "brandon sanderson", id: uuidv4() },
    { title: "thunder bolt", author: "Mo Jones", id: uuidv4() },
  ]);

  //add new book===//
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }])
  }

  //remove book===/
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }


  return (
    <div>
      <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
      </BookContext.Provider>

    </div>
  )
}

export default BookContextProvider;
