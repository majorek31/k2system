//react
import { createContext, useState } from "react";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [showProductForm, setShowProductForm] = useState();
  const [productsForOdrder, setProductsForOdrder] = useState([]);
  const [showContentForShoppingList, setShowContentForShoppingList] =
    useState(false);
  const [showOrderContainer, setShowOrderContainer] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState("all");

  return (
    <ShopContext.Provider
      value={{
        showProductForm,
        setShowProductForm,
        productsForOdrder,
        setProductsForOdrder,
        showContentForShoppingList,
        setShowContentForShoppingList,
        showOrderContainer,
        setShowOrderContainer,
        selectedFilterType,
        setSelectedFilterType,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
