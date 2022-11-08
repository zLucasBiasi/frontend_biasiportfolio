import { createContext, ReactNode, useState } from "react";

import light from "../styles/themes/ligthTheme";
import dark from "../styles/themes/theme";
import { ThemeType } from "../styles/themes/themeType";

interface DarkModeContextType {
  toggleTheme: () => void;
  theme: ThemeType;
}

export const DarkModeContext = createContext<DarkModeContextType>(
  {} as DarkModeContextType
);

export const DarkProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  console.log(theme);

  return (
    <>
      <DarkModeContext.Provider value={{ toggleTheme, theme }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};
