import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

// hook to get the context and show error if there is one

export const useShopInfo = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShopInfo() must be used inside a ThemeProvider");
  }

  return context;
};
