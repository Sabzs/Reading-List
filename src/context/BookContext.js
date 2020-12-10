import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Purpose Driven Life", author: "Rick Warren", id: uuidv4() },
    { title: "The One Minute Manager", author: "Ken Blanchard & Spencer Johnson", id: uuidv4() },
    { title: "Thunder Bolt", author: "Malaika Jones", id: uuidv4() },
  ]);

  //add new book===//
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }])
  }

  //remove book===/
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  //update book===//
  const updateBook = () => {
    ////
  }



  return (
    <div>
      <BookContext.Provider value={{ books, addBook, removeBook, updateBook }}>
        {props.children}
      </BookContext.Provider>

    </div>
  )
}

export default BookContextProvider;
