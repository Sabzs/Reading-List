import React from 'react'
import BookContextProvider from './context/BookContext';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BookContextProvider>

      </BookContextProvider>

    </div>
  );
}

export default App;
