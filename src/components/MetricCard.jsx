import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { expo } from "./GlassCard";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const duration = 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MetricCard({ metric, compact = false, delay = 0 }) {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: expo }}
      className={`group rounded-2xl border border-white/10 bg-slate-900/72 transition duration-200 ease-out-expo hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-cyber ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${compact ? "text-2xl" : "text-3xl"} font-extrabold text-white`}>
            <AnimatedNumber value={metric.value} suffix={metric.suffix} />
          </p>
          <p className="mt-2 text-sm leading-5 text-slate-300">{metric.label}</p>
        </div>
        {Icon ? (
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-300/50">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
