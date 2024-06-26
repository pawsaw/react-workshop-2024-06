import React from 'react';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookClicked } from './OnBookClicked';
import { Book } from '../../../domain/books';

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
