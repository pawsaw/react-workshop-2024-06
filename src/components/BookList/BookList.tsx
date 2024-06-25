import React from 'react';
import { BookListItem } from './BookListItem/BookListItem';
import { Book } from '../../domain/books/Book';
import { OnBookClicked } from './OnBookClicked';

export interface BookListProps {
  books: Book[];
  onBookClicked: OnBookClicked;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookClicked }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} onBookClicked={onBookClicked} />
      ))}
    </div>
  );
};
