import { NavLink } from 'react-router-dom';

export interface NavigationProps {
  onNavigationTriggered: (target: 'books' | 'about') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigationTriggered }) => {
  return (
    <ul>
      <li>
        <a
          href="books"
          onClick={(event) => {
            event.preventDefault();
            onNavigationTriggered('books');
          }}
        >
          Books
        </a>
      </li>
      <li>
        <a
          href="about"
          onClick={(event) => {
            event.preventDefault();
            onNavigationTriggered('about');
          }}
        >
          About
        </a>
      </li>
    </ul>
  );
};
