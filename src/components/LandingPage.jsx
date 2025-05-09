import React from "react";
import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";

export default function LandingPage() {
  const boxRef = useRef(null);

  const { bGcolor } = useTheme();

  const { setHeight } = useContext(AnimationContext);

  // set the height of landing page to compare later when navbar schould pop
  // it need to have the delay bc some of the content is loaded later and the height is wrong

  useEffect(() => {
    setTimeout(() => {
      if (boxRef.current) {
        setHeight(boxRef.current.offsetHeight);
      }
    }, 50);
  }, []);

  return (
    <div
      ref={boxRef}
      className={`justify-left flex h-screen items-center ${bGcolor}`}
    >
      <h1 className="m-5 p-5 text-4xl font-bold text-white text-shadow-sm text-shadow-white md:m-8 md:p-8 md:text-6xl lg:m-10 lg:p-10 lg:text-8xl">
        k2system
      </h1>
    </div>
  );
}
