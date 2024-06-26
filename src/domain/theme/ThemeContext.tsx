import React from 'react';
import { Theme } from './Theme';

const defaultTheme: Theme = {
  primaryColor: 'black',
};
const ThemeContext = React.createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => React.useContext(ThemeContext);
