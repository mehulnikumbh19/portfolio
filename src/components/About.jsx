import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { aboutCards } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="band band-cream">
      <div className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="About"
        title="About Me"
        description="Cloud security governance, risk, and compliance across AWS, Azure, and GCP."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <RetroCard tone="paper" hover={false} className="p-0">
          <div className="titlebar">
            <span>about.txt</span>
            <span className="titlebar-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="space-y-4 p-5 text-[1rem] leading-[1.65] text-brown sm:p-6">
            <p>
              GRC and Cloud Security Analyst with 3+ years across ITGC, control testing, cloud
              risk, and audit readiness in AWS, Azure, and GCP. Currently a GRC Analyst at
              BlackRock; previously a Cloud Security Analyst at Siemens.
            </p>
            <p>
              I work across ISO 27001, NIST CSF, SOC 2, and CIS Controls with hands-on CSPM
              triage, cloud IAM governance, Terraform and Kubernetes review, and AI/LLM governance,
              turning technical findings into audit-ready risk decisions.
            </p>
          </div>
        </RetroCard>

        <ul className="flex flex-col gap-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <RetroCard
                as="li"
                key={card.title}
                delay={index * 0.06}
                tone={index % 2 === 0 ? "cream" : "paper"}
                flat
                className="p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-orange text-ink">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <h3 className="pixel-heading text-[1.5rem] text-ink">{card.title}</h3>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-brown">{card.text}</p>
              </RetroCard>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
}
