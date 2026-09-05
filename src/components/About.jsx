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
          description="Cloud security governance, risk, and compliance across AWS, Azure, and GCP."
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
                GRC and Cloud Security Analyst with 3+ years across ITGC, control testing, cloud
                risk, and audit readiness in AWS, Azure, and GCP. Currently a GRC Analyst at
                BlackRock; previously a Cloud Security Analyst at Siemens.
              </p>
              <p>
                I work across ISO 27001, NIST CSF, SOC 2, and CIS Controls with hands-on CSPM
                triage, cloud IAM governance, Terraform and Kubernetes review, and AI/LLM
                governance, turning technical findings into audit-ready risk decisions.
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
