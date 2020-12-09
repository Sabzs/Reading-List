import React from 'react'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>

    </div>
  );
}

export default App;
