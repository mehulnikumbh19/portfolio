import { motion } from "framer-motion";

export default function Badge({ children, tone = "default", className = "" }) {
  const variant = tone === "accent" ? "chip-accent" : "chip";

  return (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className={`${variant} ${className}`}>
      {children}
    </motion.span>
  );
}
