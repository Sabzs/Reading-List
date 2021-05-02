import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { BookContext } from '../context/BookContext'


function AddBook() {
  const history = useHistory();
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author
    };
    addBook(newBook);
    history.push("/")
    //reset==//
    setTitle("");
    setAuthor("");
  }


  return (
    <div className="addBook" >
      <div className="addBook__header-wrapper" >
        <h3 >Add a book</h3>
      </div>

      <form className="addBook__form">
        <div className="addBook__title-author-wrapper" >
          <input className="addBook__title-input"
            type="text"
            placeholder="book title..."
            onChange={(e) => { setTitle(e.target.value) }}
            required
          />
          <input className="addBook__author-input"
            type="text"
            placeholder="book author..."
            onChange={(e) => { setAuthor(e.target.value) }}
            required
          />
        </div>

        <div className="addBook__submit-cancle-btn-wrapper" >
          <button className="addBook__submit-btn" type="submit" onClick={handleSubmit} >Submit</button>

          <button className="addBook__cancel-btn" type="button" >
            <Link to="/" >Cancel</Link>
          </button>
        </div>

      </form>
    </div>

  )
}

export default AddBook;
