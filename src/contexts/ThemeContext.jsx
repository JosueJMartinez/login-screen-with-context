import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // state = { isDarkMode: true };

  const toggleIsDarkMode = () => setIsDarkMode(prevState => !prevState);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
