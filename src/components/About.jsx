import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { aboutCards } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="About"
        title="About Me"
        description="Governance, risk, and compliance with technical security evidence."
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
              I am a cybersecurity and GRC professional focused on IT risk, security compliance,
              control testing, audit readiness, and risk-based remediation. I recently completed my
              M.S. in Information Systems with a cybersecurity concentration at CSULB, and I am
              targeting GRC Analyst, IT Risk Analyst, Security Compliance Analyst, Cybersecurity
              Compliance Analyst, and Security Control Assessor roles.
            </p>
            <p>
              My background combines security operations experience with governance and compliance
              work across control reviews, configuration assessments, vulnerability risk
              prioritization, IAM and access workflow support, phishing response, third-party
              application review, remediation tracking, and audit-ready documentation.
            </p>
            <p>
              I am especially focused on NIST CSF, NIST 800-53, ISO 27001, SOC 2, SOX ITGC, PCI
              DSS, CIS Controls, vendor risk, and security risk assessments.
            </p>
            <p>
              What differentiates me is the ability to translate technical security findings into
              business-impact narratives, control deficiencies, risk ratings, remediation actions,
              and stakeholder-ready documentation.
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
    </section>
  );
}
