import React, { createContext, useState, useContext } from 'react';
import { Appearance, useColorScheme } from 'react-native';

const themes = {
  light: {
    background: '#fff',
    text: '#000',
    tabBar: '#fff',
    icon: '#27272A',
    iconFocused: 'blue',
  },
  dark: {
    background: '#000',
    text: '#fff',
    tabBar: '#333',
    icon: '#888',
    iconFocused: '#00f',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(themes[colorScheme] || themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

