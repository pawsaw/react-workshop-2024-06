import { createBrowserRouter, redirect } from 'react-router-dom';
import { App } from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BooksScreen } from './screens/BooksScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '',
        loader: () => redirect('/books'),
      },
      {
        path: 'books',
        element: <BooksScreen />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
    ],
  },
]);
