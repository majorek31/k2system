import { useContext } from "react";
import { ShowErrorContext } from "../../context/ShowErrorContext";

// hook to get the context and show error if there is one

export const useShowError = () => {
  const context = useContext(ShowErrorContext);

  if (context === undefined) {
    throw new Error("useShowError() must be used inside a ShowErrorProvider");
  }

  return context;
};
