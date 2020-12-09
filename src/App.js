import React from 'react'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';
import "./styles/App.css";

function App() {
  return (
    <>
      <BookContextProvider className="bookContext">

        <div className="appContainer" >
          <Navbar />
          <BookList />
        </div>

      </BookContextProvider>
    </>
  );
}

export default App;
