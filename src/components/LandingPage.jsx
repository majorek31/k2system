//react
import { useState, useEffect, useRef, useContext } from "react";

//context
import { AnimationContext } from "../context/AnimationContext";

//hooks
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function LandingPage() {
  const boxRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollDir, setlastScrollDir] = useState(false);

  const scrollDir = useScrollDirection();

  const { scrollY, height, setHeight } = useContext(AnimationContext);

  useEffect(() => {
    scrollDir === "up" ? setlastScrollDir("up") : setlastScrollDir("down");
  }, [scrollDir]);

  // Set the height of landing page to compare later when navbar should pop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (boxRef.current) {
        setHeight(boxRef.current.offsetHeight);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [setHeight]);

  useEffect(() => {
    // Scroll down
    if (
      scrollY > 0 &&
      scrollY < height &&
      lastScrollDir === "down" &&
      !isScrolling
    ) {
      document.body.style.overflow = "hidden";
      setIsScrolling(true);

      window.scrollTo({
        top: height + 8,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
        document.body.style.overflow = "auto";
      }, 700);
    }

    // Scroll up
    if (
      lastScrollDir === "up" &&
      scrollY > height &&
      scrollY < height + 5 &&
      !isScrolling
    ) {
      document.body.style.overflow = "hidden";
      setIsScrolling(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
        document.body.style.overflow = "auto";
      }, 700);
    }
  }, [scrollY, height, isScrolling, scrollDir]);

  return (
    <div
      ref={boxRef}
      className="justify-left flex h-screen items-center transition-transform will-change-transform motion-reduce:transition-none"
    >
      <h1 className="m-5 p-5 text-4xl font-bold text-white text-shadow-sm text-shadow-white md:m-8 md:p-8 md:text-6xl lg:m-10 lg:p-10 lg:text-8xl">
        k2system
        <br />
        wynajem drukarek
      </h1>
    </div>
  );
}
