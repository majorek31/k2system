//framer motionb
import { motion } from "framer-motion";

//react observer
import { useInView } from "react-intersection-observer";

//hooks
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function ScrollAnimatedSection({ children }) {
  // threshold is value that means the animation will begin with % of div we need to see to begin an animation
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  // check if i scroll down or up
  const scrollDir = useScrollDirection();

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        className="relative z-0"
        key="section"
        // first part of animation
        initial={{
          opacity: 0,
          y: scrollDir === "down" ? -500 : 500,
        }}
        // when in view, animate to full opacity and 0 position
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : scrollDir === "down" ? 500 : -500,
        }}
        // exit animation when it goes out of view
        exit={{
          opacity: 0,
          y: scrollDir === "down" ? -500 : 500,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
