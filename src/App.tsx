import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './domain/theme';
import { Navigation } from './components/Navigation';
import { useRef, useState } from 'react';

const Counter: React.FC = () => {
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);
  return (
    <button
      onClick={() => {
        countRef.current = countRef.current + 1;
        console.log('count', countRef.current);
      }}
    >
      {countRef.current}
    </button>
  );
};

export function App() {
  const navigate = useNavigate();
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Book Manager</h1>
        <Counter />
        <Counter />
        <Navigation
          onNavigationTriggered={(target) => {
            navigate(target);
          }}
        />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
