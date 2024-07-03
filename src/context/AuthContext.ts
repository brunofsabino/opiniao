
import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
};

//export const useTheme = () => useContext(ThemeContext);