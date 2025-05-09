import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export default function ToggleCard({ text, image }) {
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
    }, 300);

    return () => clearInterval(interval);
  }, [direction, letters.length]);

  return (
    <motion.div className={`flex h-fit w-fit items-center justify-center gap-3 rounded-4xl p-4 shadow-lg ${bGcolor}`}>
      <img className=" object-contain brightness-0 invert filter h-16 w-16 object-cover" src={image} alt="logo" />
      <div className="flex font-bold text-white">
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
    </motion.div>
  );
}
