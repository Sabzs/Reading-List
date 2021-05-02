export const bookReducer = (state, action) => {
  switch (action.type) {

    case "GET_BOOKS":
      return {
        ...state,
        loading: false,
        books: action.payload
      }

    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
      }

    // case "EDIT_BOOK":
    //   const updatedBook = action.payload;
    //   const updatedBooks = state.books.map(book => {
    //     if (book.id === updatedBook.id) {
    //       return updatedBook
    //     }
    //     return book
    //   })
    //   return {
    //     ...state,
    //     books: updatedBooks
    //   }

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      }

    case "BOOK_ERROR":
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}