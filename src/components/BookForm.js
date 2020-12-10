import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_BOOK", book: {
        title, author
      }
    });

    //reset==//
    setTitle("");
    setAuthor("");
  }


  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <input className="bookForm__title-input"
        type="text"
        placeholder="book title..."
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        required
      />
      <input className="bookForm__author-input"
        type="text"
        placeholder="book author..."
        value={author}
        onChange={(e) => { setAuthor(e.target.value) }}
      />
      <input className="bookForm__submit-input"
        type="submit" value="Submit" />

    </form>
  )
}

export default BookForm
