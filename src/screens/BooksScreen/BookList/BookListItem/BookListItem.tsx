import { Book } from '../../../../domain/books';
import { useTheme } from '../../../../domain/theme';
import { OnBookClicked } from '../OnBookClicked';

export interface BookListItemProps {
  book: Book;
  onBookClicked: OnBookClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookClicked }) => {
  const { primaryColor } = useTheme();
  return (
    <div className="book-list-item" onClick={() => onBookClicked(book)}>
      <p style={{ color: primaryColor }}>
        {book.title} by {book.author}
      </p>
    </div>
  );
};
