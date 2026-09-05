import { tickerItems } from "../data/portfolioData";

export default function Ticker() {
  // Duplicate the list so the track can loop seamlessly at -50%.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="ticker border-y-[3px] border-ink bg-ink text-orange"
      aria-label="Frameworks, platforms, and certifications"
    >
      <ul className="ticker__track">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            aria-hidden={index >= tickerItems.length ? "true" : undefined}
            className="pixel-label flex items-center gap-4 px-4 py-2.5 text-[1.1rem]"
          >
            {item}
            <span aria-hidden="true" className="h-2 w-2 bg-orange" />
          </li>
        ))}
      </ul>
    </div>
  );
}
