// components/AnimatedCard.js
"use client"; // Mark this as a client component

import { motion } from "framer-motion";

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="transition-transform transform hover:shadow-2xl"
    >
      {children}
    </motion.div>
  );
}
