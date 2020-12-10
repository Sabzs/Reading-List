import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {
  const { addBook } = useContext(BookContext)

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook(title, author);

    //reset==//
    setTitle("");
    setAuthor("");
  }



  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        required
      />
      <input type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => { setAuthor(e.target.value) }}
      />
      <input type="submit" value="Add Book" />

    </form>
  )
}

export default BookForm
