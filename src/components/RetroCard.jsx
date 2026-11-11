import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export default function RetroCard({
  children,
  className = "",
  tone = "paper",
  hover = true,
  flat = false,
  corner = false,
  delay = 0,
  as = "div",
  ariaLabel
}) {
  const toneClass =
    tone === "cream"
      ? "retro-card--cream"
      : tone === "dark"
      ? "retro-card--dark"
      : "";

  const hoverClass = hover ? "retro-card--hover" : "";
  const flatClass = flat ? "retro-card--flat" : "";
  const cornerClass = corner ? "retro-corner" : "";

  const Component = motion[as] ?? motion.div;

  return (
    <Component
      aria-label={ariaLabel}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay, ease: [0.5, 0, 0.5, 1] }}
      className={`retro-card ${toneClass} ${hoverClass} ${flatClass} ${cornerClass} ${className}`}
    >
      {children}
    </Component>
  );
}
