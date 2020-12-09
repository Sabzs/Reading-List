import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
  const { books } = useContext(BookContext)


  return (
    <div className="navBar">
      <div className="navBar__innerContainer" >
        <h1 className="navBar__header" >My Reading List</h1>
        <h4 className="navBar__bookCount" >Currently have {books.length} books to go through... </h4>
      </div>

    </div>
  )
}

export default Navbar
