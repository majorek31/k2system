import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";
import { useScroll } from "@react-three/drei";

export default function LandingPage() {
  const boxRef = useRef(null);

  const [scrollLandingPageDirection, setScrollLandingPageDirection] =
    useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const { bGcolor } = useTheme();
  const { scrollY, height } = useContext(AnimationContext);

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

  useEffect(() => {
    scrollY > height
      ? setScrollLandingPageDirection("up")
      : setScrollLandingPageDirection("down");
  }, [scrollY, height]);
  {
    console.log(scrollLandingPageDirection);
  }
  useEffect(() => {
    // Warunek, gdy przewijamy w dół
    if (
      scrollY > 0 &&
      scrollY < height &&
      scrollLandingPageDirection == "down" &&
      !isScrolling
    ) {
      document.body.style.overflow = 'hidden';
      setIsScrolling(true);
      window.scrollTo({
        top: height + 6,
        behavior: "smooth",
      });
      setScrollLandingPageDirection("up");

      setTimeout(() => {
        setIsScrolling(false);
        document.body.style.overflow = 'auto';
      }, 700);
    }
    if (
      scrollLandingPageDirection == "up" &&
      scrollY > height &&
      scrollY < height + 5 &&
      !isScrolling
    ) {
      document.body.style.overflow = 'hidden';
      setIsScrolling(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollLandingPageDirection("down");

      setTimeout(() => {
        setIsScrolling(false);
        document.body.style.overflow = 'auto';
      }, 700);
    }
  }, [scrollY, height, isScrolling]);

  return (
    <div ref={boxRef} className={`justify-left flex h-screen items-center`}>
      <h1 className="m-5 p-5 text-4xl font-bold text-white text-shadow-sm text-shadow-white md:m-8 md:p-8 md:text-6xl lg:m-10 lg:p-10 lg:text-8xl">
        k2system
      </h1>
    </div>
  );
}
