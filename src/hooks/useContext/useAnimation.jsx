import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

// hook to get the context and show error if there is one

export const useAnimation = () => {
  const context = useContext(AnimationContext);

  if (context === undefined) {
    throw new Error("UseAnimation() must be used inside a ThemeProvider");
  }

  return context;
};
