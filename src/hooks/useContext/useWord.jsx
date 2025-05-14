import { useContext } from "react";
import { WordContext } from "../../context/WordContext";

// hook to get the context and show error if there is one

export const useWord = () => {
  const context = useContext(WordContext);

  if (context === undefined) {
    throw new Error("UseWord() must be used inside a ThemeProvider");
  }

  return context;
};
