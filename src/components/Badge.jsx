export default function Badge({ children, tone = "paper", className = "" }) {
  const tones = {
    paper: "pill-retro",
    orange: "pill-retro pill-retro--orange",
    dark: "pill-retro pill-retro--dark",
    cream: "pill-retro pill-retro--cream"
  };
  return <span className={`${tones[tone] ?? tones.paper} ${className}`}>{children}</span>;
}
