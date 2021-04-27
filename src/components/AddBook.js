// import React from 'react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext'

function AddBook() {
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
    <div className="addBook" >
      <div className="addBook__header-wrapper" >
        <h3 className="abbBook__header-title" >Add a book</h3>
      </div>

      <form className="addBook__form" onSubmit={handleSubmit}>

        <input className="addBook__title-input"
          type="text"
          placeholder="book title..."
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          required
        />
        <input className="addBook__author-input"
          type="text"
          placeholder="book author..."
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }}
        />

        <div className="addBook__submit-cancle-btn-wrapper" >
          <button className="addBook__submit-btn" type="submit" >Submit</button>

          <button className="addBook__cancel-btn" type="button" >
            <Link to="/" >Cancel</Link>
          </button>
        </div>

      </form>
    </div>

  )
}

export default AddBook;
