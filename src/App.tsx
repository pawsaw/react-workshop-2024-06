import { useCallback } from 'react';
import './App.css';
import { BookList } from './components/BookList/BookList';
import { OnBookClicked } from './components/BookList/OnBookClicked';
import { Book, useBooks } from './domain/books';

function App() {
  const { books, reloadBooks } = useBooks();

  const onBookClicked: OnBookClicked = useCallback((book: Book) => {
    alert(book.price); // ... ich verbringe hier 10h
  }, []);

  return (
    <div className="App">
      <h1>Book Manager</h1>
      <button onClick={() => reloadBooks()}>Reload Books</button>
      {books ? <BookList books={books} onBookClicked={onBookClicked} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
