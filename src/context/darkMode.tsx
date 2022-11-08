import { createContext, ReactNode, useState } from "react";

export const DarkMode = createContext();

import light from "../styles/themes/ligthTheme";
import dark from "../styles/themes/theme";

export const DarkProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  console.log(theme);
  return (
    <>
      <DarkMode.Provider value={{ toggleTheme, theme }}>
        {children}
      </DarkMode.Provider>
    </>
  );
};
