import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "full stack ai engineer",
  "web developer",
  "vibe coder",
  "creator",
];

export function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
