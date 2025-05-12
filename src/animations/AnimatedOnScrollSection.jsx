import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function ScrollAnimatedSection({ children }) {
  //threshold is value that mean the animation will begin with % of div we need to se to begin a animationa
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: false });
  //check if i scroll down or up
  const scrollDir = useScrollDirection();

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <AnimatePresence>
        {inView && (
          <motion.div
            className="relative z-0"
            key="section"
            //first part of animation
            initial={{
              opacity: 0,
              y: scrollDir === "down" ? 500 : -500,
            }}
            //when not animated
            animate={{
              opacity: 1,
              y: 0,
            }}
            //when the animation is finisching
            // exit={{
            //   opacity: 0,
            //   y: scrollDir === "down" ? -500 : 500,
            // }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
