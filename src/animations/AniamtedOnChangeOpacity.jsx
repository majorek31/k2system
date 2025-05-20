import { motion, AnimatePresence } from "framer-motion";

export default function AniamtedOnChangeOpacity({ isVisible, children }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
