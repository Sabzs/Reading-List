import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext'


function EditBook() {
  const { books, editBook } = useContext(BookContext);

  const [selectedBook, setSelectedBook] = useState(
    { id: "", title: "", author: "" }
  );

  const { title, author } = selectedBook;
  const handleBookChange = (e) => {
    const { name, value } = e.target;
    setSelectedBook({ ...selectedBook, [name]: value })
  }

  const history = useHistory();
  const updateBook = (e) => {
    e.preventDefault();
    editBook(selectedBook);
    history.push("/")
    // setSelectedBook("")
  }


  const { id } = useParams();
  const currentBookId = id;
  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = books.find(book => book.id === bookId);
    setSelectedBook(selectedBook)
  }, [currentBookId, books]);





  return (
    <div className="addBook" >
      <div className="addBook__header-wrapper" >
        <h3 className="abbBook__header-title" >Edit a book</h3>
      </div>

      <form className="addBook__form">
        <input className="addBook__title-input"
          type="text"
          placeholder="book title..."
          name="title"
          value={title}
          onChange={handleBookChange}
          required
        />
        <input className="addBook__author-input"
          type="text"
          placeholder="book author..."
          name="author"
          value={author}
          onChange={handleBookChange}
          required
        />

        <div className="addBook__submit-cancle-btn-wrapper" >
          <button className="addBook__submit-btn" type="submit" onClick={updateBook}  >Edit</button>

          <button className="addBook__cancel-btn" type="button" >
            <Link to="/" >Cancel</Link>
          </button>
        </div>

      </form>
    </div>
  )

}

export default EditBook;
