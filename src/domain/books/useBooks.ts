import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';
import { fetchBooks } from './api';

export interface UseBooksResult {
  books: Book[] | null;
  reloadBooks: () => void;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const reloadBooks = useCallback(() => {
    setBooks(null);
    fetchBooks().then((_books) => {
      setBooks(_books);
    });
  }, []);

  useEffect(() => {
    reloadBooks();
  }, [reloadBooks]);
  return { books, reloadBooks };
};
