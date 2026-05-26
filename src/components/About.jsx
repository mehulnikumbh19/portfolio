import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { aboutCards } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Cybersecurity evidence, translated into audit-ready risk decisions"
        description="Security operations context, governance language, and documentation habits built around controls, remediation, and stakeholder clarity."
      />
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-5 text-[1rem] leading-8 text-slate-300 sm:text-[1.05rem]">
            <p>
              I am a <strong className="text-white">cybersecurity and GRC professional</strong> focused on IT risk,
              security compliance, control testing, audit readiness, and risk-based remediation. I recently completed my
              <strong className="text-cyan-100"> M.S. in Information Systems with a cybersecurity concentration at CSULB</strong>,
              and I am targeting GRC Analyst, IT Risk Analyst, Security Compliance Analyst, Cybersecurity Compliance
              Analyst, and Security Control Assessor roles.
            </p>
            <p>
              My background combines security operations experience with governance and compliance work across control
              reviews, configuration assessments, vulnerability risk prioritization, IAM/access workflow support,
              phishing response, third-party application review, remediation tracking, and audit-ready documentation.
            </p>
            <p>
              I am especially focused on <strong className="text-emerald-100">NIST CSF, NIST 800-53, ISO 27001,
              SOC 2, SOX ITGC, PCI DSS, CIS Controls, vendor risk, and security risk assessments</strong>.
            </p>
            <p>
              What differentiates me is my ability to translate technical security findings into business-impact
              narratives, control deficiencies, risk ratings, remediation actions, and stakeholder-ready documentation.
            </p>
          </div>
        </GlassCard>

        <div className="grid gap-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.title} delay={index * 0.08} className="p-5">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-300/22 bg-emerald-300/10 text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="eyebrow mb-2">Capability {index + 1}</p>
                    <h3 className="display-3">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
