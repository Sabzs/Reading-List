import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import axios from 'axios';
// import { useParams } from 'react-router';


//initial state
const initialState = {
  books: [],
  error: null,
  loading: true
};

//create Context
export const BookContext = createContext(initialState);

//global provider
const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);


  //==Actions==//
  const getBooks = async () => {
    try {
      const res = await axios.get("/api/books/getbooks");
      console.log(res.data)
      dispatch({
        type: "GET_BOOKS",
        payload: res.data.getbooks
      })
    } catch (err) {
      dispatch({
        type: "BOOK_ERROR",
        payload: err.response.data.error
      });
    }
  }


  const addBook = async (book) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await axios.post("/api/books/newbook", book, config);
      console.log(res.data.newbook)
      dispatch({
        type: "ADD_BOOK",
        payload: res.data.newbook
      })
    } catch (err) {
      dispatch({
        type: "BOOK_ERROR",
        payload: err.response.data.error
      });
    }
  }

  // // const { id } = useParams;
  // const editBook = async (book) => {
  //   const config = { headers: { 'Content-Type': 'application/json' } };
  //   try {
  //     const res = await axios.put(`/api/books/updatebook/${book.id}`, book, config)
  //     dispatch({
  //       type: "EDIT_BOOK",
  //       payload: res.data.updatedbook
  //     })
  //     getBooks();
  //   } catch (err) {
  //     dispatch({
  //       type: "BOOK_ERROR",
  //       payload: err.response.data.error
  //     });
  //   }
  // }

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/deleteBook/${id}`)
      dispatch({
        type: "DELETE_BOOK",
        payload: id
      });
    } catch (err) {
      dispatch({
        type: "BOOK_ERROR",
        payload: err.response.data.error
      });
    }

  }

  return (
    <div>
      <BookContext.Provider value={{
        books: state.books,
        error: state.error,
        loading: state.loading,
        getBooks,
        addBook,
        // editBook,
        deleteBook
      }}>
        {props.children}
      </BookContext.Provider>

    </div>
  )
}


export default BookContextProvider;
