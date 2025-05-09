import React, { createContext, useState, useEffect } from "react";

// Tworzymy kontekst
export const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // czyszczenie
  }, []);

  return (
    <AnimationContext.Provider
      value={{ scrollY, setScrollY, height, setHeight }}
    >
      {children}
    </AnimationContext.Provider>
  );
}
