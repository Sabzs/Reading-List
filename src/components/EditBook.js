import React from 'react';
// import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import { BookContext } from '../context/BookContext'


function EditBook() {
  return (
    <div className="addBook" >
      <div className="addBook__header-wrapper" >
        <h3 className="abbBook__header-title" >Edit a book</h3>
      </div>

      {/* <form className="addBook__form" onSubmit={handleSubmit}> */}
      <form className="addBook__form">

        <input className="addBook__title-input"
          type="text"
          placeholder="book title..."
          // value={title}
          // onChange={(e) => { setTitle(e.target.value) }}
          required
        />
        <input className="addBook__author-input"
          type="text"
          placeholder="book author..."
        // value={author}
        // onChange={(e) => { setAuthor(e.target.value) }}
        />

        <div className="addBook__submit-cancle-btn-wrapper" >
          <button className="addBook__submit-btn" type="submit" >Edit</button>

          <button className="addBook__cancel-btn" type="button" >
            <Link to="/" >Cancel</Link>
          </button>
        </div>

      </form>
    </div>

  )

}

export default EditBook;
