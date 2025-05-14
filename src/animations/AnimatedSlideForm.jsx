import { AnimatePresence, motion } from "framer-motion";

export default function ScrollAnimatedSection({ children, whichFormAnim }) {
  return (
    <motion.div
      key={whichFormAnim}
      initial={{
        opacity: 0,
        x: whichFormAnim === "register" ? -100 : 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: whichFormAnim === "register" ? -100 : 100,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}