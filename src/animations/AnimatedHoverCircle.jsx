//react
import { useEffect, useState } from "react";

//framer motion
import { motion, AnimatePresence } from "framer-motion";

//hooks
import { useTheme } from "../hooks/useContext/useTheme";

export default function ToggleCard({ text, image, showContent }) {
  const letters = text.split("");
  const [visibleCount, setVisibleCount] = useState(0);
  const [direction, setDirection] = useState("forward");

  const { bGcolor } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (direction === "forward") {
          if (prev < letters.length) return prev + 1;
          //this make a time gap bettwen animation
          setTimeout(() => setDirection("backward"), 15000);
          clearInterval(interval);
          return prev;
        } else {
          if (prev > 0) return prev - 1;
          //this make a time gap bettwen animation
          setTimeout(() => setDirection("forward"), 3000);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, letters.length]);

  return (
    <motion.div>
      <div
        className={`flex h-fit w-fit items-center justify-center rounded-4xl p-4 ${bGcolor} lg:text-2xl`}
      >
        {/* if you want black type inverted in class */}
        <img
          className="h-16 w-16 object-contain object-cover p-2 brightness-0 filter lg:h-24 lg:w-24"
          src={image}
          alt="logo"
        />
        <div
          className={`flex w-fit font-bold text-black ${letters.length == 0 ? "pl-3" : ""}`}
        >
          <AnimatePresence>
            {letters.slice(0, visibleCount).map((char, index) => (
              <motion.span
                key={char + index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
