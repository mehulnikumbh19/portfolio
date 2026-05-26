import { motion } from "framer-motion";

export const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export const expo = [0.16, 1, 0.3, 1];

export default function GlassCard({
  children,
  className = "",
  as = "div",
  delay = 0,
  hover = true
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay, ease: expo }}
      className={`cyber-panel ${hover ? "cyber-panel-hover" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
