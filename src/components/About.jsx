import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { aboutCards } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="site-shell py-14 sm:py-20">
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
              I am a GRC and Cloud Security Analyst with 3+ years of experience across ITGC,
              control testing, cloud risk assessments, audit readiness, and security compliance in
              AWS, Azure, and GCP environments. I currently work as a GRC Analyst at BlackRock,
              where I triage cloud security posture findings, review network and encryption
              controls, and support regulatory control testing.
            </p>
            <p>
              Previously, as a Cloud Security Analyst at Siemens, I maintained ISO 27001
              documentation, executed ITGC control testing, administered ServiceNow IRM and CMDB
              activities, and reviewed SAP GRC access and segregation-of-duties conflicts across a
              global environment.
            </p>
            <p>
              My framework depth spans ISO 27001, NIST CSF, SOC 2, CIS Controls, GDPR, the DPDP
              Act, CERT-In, and IEC 62443, paired with hands-on cloud IAM governance, CSPM triage,
              Terraform and Kubernetes security review, and emerging AI/LLM governance work.
            </p>
            <p>
              What differentiates me is the ability to translate technical cloud security findings
              into audit-ready risk narratives, control deficiencies, and stakeholder-ready
              reporting across complex, multi-cloud environments.
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
