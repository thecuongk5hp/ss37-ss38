import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'blue',
  setTheme: () => {}
});

export default ThemeContext;
