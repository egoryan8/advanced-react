import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() =>  ({
    theme,
    setTheme,
  }), [theme])
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;