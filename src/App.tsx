import { Outlet } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './domain/theme';

export function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Book Manager</h1>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
