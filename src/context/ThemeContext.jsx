//react
import { createContext } from "react";

export const ThemeContext = createContext();

// future colors for website
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ bGcolor: "bg-white" }}>
      {children}
    </ThemeContext.Provider>
  );
}
