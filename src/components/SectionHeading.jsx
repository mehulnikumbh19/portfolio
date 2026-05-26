import { motion } from "framer-motion";
import { expo } from "./GlassCard";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.58, ease: expo }}
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="display-2">{title}</h2>
      {description ? <p className="lead mt-5">{description}</p> : null}
    </motion.header>
  );
}
