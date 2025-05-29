//react
import { createContext,useState } from "react";

export const ShowErrorContext = createContext();

// future colors for website
export function ShowErrorProvider({ children }) {
  const [isError, setIsError] = useState(false);
  const [errorContent, setErrorContent] = useState("");
  return (
    <ShowErrorContext.Provider value={{ isError, setIsError, errorContent, setErrorContent }}>
      {children}
    </ShowErrorContext.Provider>
  );
}
