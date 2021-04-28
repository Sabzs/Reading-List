import React from 'react'
import BookList from "./BookList";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home" >
      <button className="home__addbook-link-btn" >
        <Link to="/addbook" >Add Book</Link>
      </button>

      <BookList />
    </div>
  )
}

export default Home;
