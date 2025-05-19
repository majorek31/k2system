import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { motion } from "framer-motion";

export default function ScrollAnimatedSection({ children, className }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const scrollDir = useScrollDirection();

  return (
    <div ref={ref} className={className}>
      <motion.div
        key={inView ? "visible" : "hidden"} // wymusza remount, więc initial odpierdoli
        initial={{
          opacity: 0,
          y: scrollDir === "down" ? 100 : -100,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : scrollDir === "down" ? -100 : 100,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ pointerEvents: inView ? "auto" : "none" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
