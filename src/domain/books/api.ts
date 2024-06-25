import { Book } from './Book';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('http://localhost:4730/books');
  return response.json();
};
