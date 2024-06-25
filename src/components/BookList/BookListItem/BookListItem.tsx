import { Book } from '../../../domain/books/Book';
import { OnBookClicked } from '../OnBookClicked';

export interface BookListItemProps {
  book: Book;
  onBookClicked: OnBookClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookClicked }) => {
  return (
    <div className="book-list-item" onClick={() => onBookClicked(book)}>
      <p>
        {book.title} by {book.author}
      </p>
    </div>
  );
};
