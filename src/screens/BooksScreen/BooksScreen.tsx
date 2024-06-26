import { useCallback } from 'react';

import { useBooks, Book } from '../../domain/books';
import { BookList } from './BookList/BookList';
import { OnBookClicked } from './BookList/OnBookClicked';

export const BooksScreen: React.FC = () => {
  const { books, reloadBooks } = useBooks();

  const onBookClicked: OnBookClicked = useCallback((book: Book) => {
    alert(book.price); // ... ich verbringe hier 10h
  }, []);
  return (
    <div className="books-screen">
      <button onClick={() => reloadBooks()}>Reload Books</button>
      {books ? <BookList books={books} onBookClicked={onBookClicked} /> : <p>Loading...</p>}
    </div>
  );
};
