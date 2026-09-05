import { useEffect, useState } from "react";
import { profile, terminalLines } from "../data/portfolioData";

const TYPE_MS = 38;
const HOLD_MS = 1700;
const DELETE_MS = 16;
const GAP_MS = 350;

export default function TerminalTyper() {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const target = terminalLines[lineIdx];
    let timer;

    if (phase === "typing") {
      timer =
        text.length < target.length
          ? setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS)
          : setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      timer =
        text.length > 0
          ? setTimeout(() => setText(text.slice(0, -1)), DELETE_MS)
          : setTimeout(() => {
              setLineIdx((idx) => (idx + 1) % terminalLines.length);
              setPhase("typing");
            }, GAP_MS);
    }

    return () => clearTimeout(timer);
  }, [text, phase, lineIdx, reduced]);

  const shown = reduced ? terminalLines[terminalLines.length - 1] : text;

  return (
    <div className="retro-card retro-card--dark scanlines flex items-center gap-3 p-3 sm:p-4">
      <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-success" />
      <span className="sr-only">{profile.availability}</span>
      <p aria-hidden="true" className="pixel-label flex min-w-0 items-center gap-2 text-paper">
        <span className="shrink-0 text-orange">mehul@grc:~$</span>
        <span className="truncate">{shown}</span>
        <span className="cursor-blink shrink-0 text-violet">&#9608;</span>
      </p>
    </div>
  );
}
