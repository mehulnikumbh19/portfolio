import PixelAvatar from "./PixelAvatar";
import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { aboutSpecs } from "../data/portfolioData";

const swatches = ["bg-orange", "bg-cream", "bg-paper", "bg-success", "bg-warn", "bg-risk", "bg-violet"];

export default function About() {
  return (
    <section id="about" className="band band-cream">
      <div className="site-shell py-10 sm:py-14">
        <SectionTitle
          kicker="About"
          title="About Me"
          description="IT governance, risk, and compliance with a first-line-of-defense focus."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <RetroCard tone="paper" hover={false} className="p-0">
            <div className="titlebar">
              <span>about.txt</span>
              <span className="titlebar-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="space-y-3 p-5 text-[0.97rem] leading-[1.6] text-brown">
              <p>
                IT Governance and GRC Analyst with an M.S. in Information Systems (Cybersecurity)
                from CSULB. Most recently a GRC / Cybersecurity Analyst Intern at The Cheesecake
                Factory; previously a Security Analyst at VESIT and a Security Operations Analyst
                at Telenetworks Technologies.
              </p>
              <p>
                I run 1LOD ITGC control testing, third-party risk reviews of vendor SOC 2 reports
                and CUECs, and IAM access reviews across NIST CSF, NIST SP 800-53, ISO 27001, and
                CIS Controls, turning technical findings into risk registers, remediation plans,
                and audit-ready evidence.
              </p>
            </div>
          </RetroCard>

          <RetroCard tone="dark" hover={false} className="scanlines p-0">
            <div className="titlebar bg-orange text-ink">
              <span>sysinfo</span>
              <span className="pixel-label">mehul@grc</span>
            </div>
            <div className="flex gap-5 p-5">
              <div className="hidden shrink-0 sm:block">
                <PixelAvatar size={96} />
              </div>
              <dl className="min-w-0 flex-1 space-y-1.5">
                {aboutSpecs.map((spec) => (
                  <div key={spec.key} className="pixel-label flex flex-wrap gap-x-2 text-paper">
                    <dt className="text-orange">{spec.key}</dt>
                    <dd className="min-w-0">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex gap-1.5 px-5 pb-5" aria-hidden="true">
              {swatches.map((swatch) => (
                <span key={swatch} className={`h-4 w-6 border-2 border-paper ${swatch}`} />
              ))}
            </div>
          </RetroCard>
        </div>
      </div>
    </section>
  );
}
