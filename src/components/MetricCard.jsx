import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import RetroCard from "./RetroCard";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 900;
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

export default function MetricCard({ metric, delay = 0 }) {
  const Icon = metric.icon;
  return (
    <RetroCard delay={delay} className="p-5 sm:p-6" tone="paper" hover>
      <div className="flex items-start justify-between gap-3">
        <p className="pixel-heading text-[clamp(2rem,4.5vw,3rem)] text-ink">
          <AnimatedNumber value={metric.value} suffix={metric.suffix} />
        </p>
        {Icon ? (
          <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-orange text-ink">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <p className="pixel-label mt-3 text-brown">{metric.label}</p>
    </RetroCard>
  );
}
