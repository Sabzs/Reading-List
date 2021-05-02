import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import AddBook from './components/AddBook';
// import EditBook from './components/EditBook';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';
import "./styles/App.css";


function App() {
  return (
    <>
      <BookContextProvider className="bookContext">
        <div className="appContainer" >
          <Navbar />
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/addbook" exact render={() => <AddBook />} />
              {/* <Route path="/editbook/:id" exact render={() => <EditBook />} /> */}
            </Switch>
          </Router>
        </div>

      </BookContextProvider>
    </>
  );
}

export default App;
