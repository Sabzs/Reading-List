import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';


//initial state
const initialState = { books: [] };

//create Context
export const BookContext = createContext(initialState);

//global provider
const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);


  //==Actions==//
  const addBook = (book) => {
    dispatch({
      type: "ADD_BOOK",
      payload: book
    })
  }

  const editBook = (book) => {
    dispatch({
      type: "EDIT_BOOK",
      payload: book
    })
  }

  const deleteBook = (id) => {
    dispatch({
      type: "DELETE_BOOK",
      payload: id
    });
  }

  return (
    <div>
      <BookContext.Provider value={{
        books: state.books,
        addBook,
        editBook,
        deleteBook
      }}>
        {children}
      </BookContext.Provider>

    </div>
  )
}


export default BookContextProvider;
