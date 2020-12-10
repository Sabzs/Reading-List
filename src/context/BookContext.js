import React, { createContext, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);


  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>

    </div>
  )
}

export default BookContextProvider;
