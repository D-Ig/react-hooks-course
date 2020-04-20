import { createContext } from 'react';

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
