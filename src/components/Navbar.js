import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
  const { books } = useContext(BookContext)


  return (
    <div>
      <h1>My Reading List</h1>
      <h4>currently have {books.length} to go through... </h4>
    </div>
  )
}

export default Navbar
