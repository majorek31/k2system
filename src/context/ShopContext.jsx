//react
import { createContext,useState } from "react";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [showProductForm, setShowProductForm] = useState();
  return (
    <ShopContext.Provider value={{ showProductForm,setShowProductForm }}>
      {children}
    </ShopContext.Provider>
  );
}
