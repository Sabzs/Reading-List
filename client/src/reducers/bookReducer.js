export const bookReducer = (state, action) => {
  switch (action.type) {

    case "ADD_BOOK":
      return {
        ...state,
        books: [action.payload, ...state.books]
      }

    case "EDIT_BOOK":
      const updatedBook = action.payload;
      const updateBooks = state.books.map(book => {
        if (book.id === updatedBook.id) {
          return updatedBook
        }
        return book
      })
      return {
        ...state,
        books: updateBooks
      }

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      }

    default:
      return state;
  }
}