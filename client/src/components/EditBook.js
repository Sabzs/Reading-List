import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext'


function EditBook() {
  const history = useHistory();
  const { id } = useParams();

  const { books, editBook } = useContext(BookContext);

  const [updateBook, setUpdateBook] = useState({
    title: "",
    author: ""
  });


  useEffect(() => {
    const bookId = id;
    const updateBook = books.find(book => book.id === bookId);
    setUpdateBook(updateBook)
  }, [id, books]);

  const { title, author } = setUpdateBook;
  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdateBook({ ...updateBook, [name]: value })
  }

  const submitUpdate = (e) => {
    e.preventDefault();
    editBook({ title, author });
    history.push("/")
  }




  return (
    <div className="addBook" >
      <div className="addBook__header-wrapper" >
        <h3 className="abbBook__header-title" >Edit a book</h3>
      </div>

      <form className="addBook__form" onSubmit={submitUpdate}>
        <input className="addBook__title-input"
          type="text"
          placeholder="book title..."
          name="title"
          value={title}
          // onChange={onChange}
          onChange={handleChange}
          required
        />
        <input className="addBook__author-input"
          type="text"
          placeholder="book author..."
          name="author"
          value={author}
          // onChange={onChange}
          onChange={handleChange}
          required
        />

        <div className="addBook__submit-cancle-btn-wrapper" >
          <button className="addBook__submit-btn" type="submit"  >Edit</button>

          <button className="addBook__cancel-btn" type="button" >
            <Link to="/" >Cancel</Link>
          </button>
        </div>

      </form>
    </div>
  )

}

export default EditBook;
