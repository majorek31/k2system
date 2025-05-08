import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// hook to get the context and show error if there is one

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("UseTheme() must be used inside a ThemeProvider");
  }

  return context;
};
