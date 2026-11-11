import { Download } from "lucide-react";
import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import Badge from "./Badge";
import { artifacts } from "../data/portfolioData";

const tonePalette = ["paper", "cream", "paper", "cream", "paper", "cream", "paper"];

export default function Artifacts() {
  return (
    <section className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Cartridges"
        title="Portfolio Artifacts"
        description="Downloadable files. Most are placeholders until added to the public folder."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {artifacts.map((artifact, index) => {
          const Icon = artifact.icon;
          const tone = tonePalette[index % tonePalette.length];
          return (
            <RetroCard key={artifact.title} tone={tone} delay={index * 0.04} className="p-0">
              <div className="titlebar">
                <span>{`cart_0${index + 1}.${artifact.fileType.toLowerCase()}`}</span>
                <Badge tone="orange" className="!border-paper">
                  {artifact.fileType}
                </Badge>
              </div>
              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-12 w-12 place-items-center border-2 border-ink bg-orange text-ink">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
                  </span>
                  <div>
                    <h3 className="pixel-heading text-[1.4rem] text-ink">{artifact.title}</h3>
                    <p className="pixel-label text-rust">File coming soon (placeholder)</p>
                  </div>
                </div>
                <p className="text-[0.93rem] leading-relaxed text-brown">{artifact.description}</p>
                {artifact.isPlaceholder ? (
                  <span className="pixel-label border-2 border-dashed border-ink bg-cream px-3 py-2 text-rust">
                    Add file to /public to enable download
                  </span>
                ) : (
                  <a
                    className="btn-retro btn-retro--orange w-full justify-center"
                    href={artifact.href}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download
                  </a>
                )}
              </div>
            </RetroCard>
          );
        })}
      </div>

      <p className="pixel-label mt-8 border-2 border-ink bg-cream px-3 py-2 text-rust">
        Selected artifacts use simulated data for portfolio demonstration purposes.
      </p>
    </section>
  );
}
