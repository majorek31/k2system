import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function ScrollAnimatedSection({ children , duration }) {
    const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });
    const scrollDir = useScrollDirection();

    return (
        <div ref={ref} style={{ minHeight: "110vh", overflow: "hidden" }}>
            <AnimatePresence>
                {inView && (
                    <motion.div
                        className="relative z-0"
                        key="section"
                        initial={{
                            opacity: 0,
                            y: scrollDir === "down" ? 300 : -300,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: scrollDir === "down" ? -300 : 300,
                        }}
                        transition={{ duration: duration, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
