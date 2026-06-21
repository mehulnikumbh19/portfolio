import { motion } from "framer-motion";

export default function SectionTitle({
  kicker,
  title,
  description,
  size = "lg",
  align = "left"
}) {
  const titleSizeClass =
    size === "xl"
      ? "text-[clamp(2.25rem,7vw,4.5rem)]"
      : size === "md"
      ? "text-[clamp(1.5rem,4vw,2.5rem)]"
      : "text-[clamp(2rem,6vw,3.75rem)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.5, 0, 0.5, 1] }}
      className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {kicker ? (
        <p className="pill-retro pill-retro--orange mb-4">{kicker}</p>
      ) : null}
      <h2 className={`pixel-display ${titleSizeClass} text-ink`}>{title}</h2>
      {description ? (
        <p className="mt-5 max-w-prose text-base text-brown sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
