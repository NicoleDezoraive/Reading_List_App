import React from 'react'
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookFrom from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookFrom/>
      </BookContextProvider>
    </div>
  );
}

export default App;
