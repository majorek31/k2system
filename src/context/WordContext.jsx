//react
import { createContext } from "react";

export const WordContext = createContext();

// words for translate
export function WordProvider({ children }) {
  return (
    <WordContext.Provider
      value={{
        mainPage: "Strona Główna",
        delivery: "Dostawa",
        aboutUs: "O nas",
        register: "Rejestracja",
        service: "Usługi",
        shop: "Sklep",
        contact: "Kontakt",
        settings: "Ustawienia",
        rateForm:"Oceń nasze usługi"
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
