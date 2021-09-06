import React, { useState, useMemo, createContext } from 'react';
import { useLocalState } from '../hooks/useLocalState';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useLocalState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme: theme,
        onToggleTheme: handleToggleTheme,
        currentTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}