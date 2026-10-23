import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { certifications, education } from "../data/portfolioData";

export default function Education() {
  const SchoolIcon = education.icon;
  const CertIcon = certifications.icon;

  return (
    <section id="education" className="band band-cream">
      <div className="site-shell py-10 sm:py-14">
        <SectionTitle
          kicker="Credentials"
          title="Education & Certs"
          description="Cybersecurity-focused degrees, backed by cloud and security fundamentals certifications."
        />

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-5">
            {education.entries.map((entry, index) => (
              <RetroCard key={entry.school} delay={index * 0.06} tone="paper" className="p-0">
                <div className="titlebar bg-ink text-paper">
                  <span className="flex items-center gap-2">
                    <SchoolIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {entry.dates}
                  </span>
                  <span className="pixel-label">{entry.location}</span>
                </div>
                <div className="p-5 text-ink sm:p-6">
                  <h3 className="pixel-heading text-[1.55rem]">{entry.school}</h3>
                  <p className="mt-1 text-[0.95rem] font-semibold text-rust">{entry.degree}</p>
                  <p className="pixel-label mt-3 inline-flex border-2 border-ink bg-cream px-2.5 py-1 text-ink">
                    GPA {entry.gpa}
                  </p>
                </div>
              </RetroCard>
            ))}
          </div>

          <RetroCard tone="dark" hover={false} delay={0.12} className="scanlines p-0">
            <div className="titlebar bg-orange text-ink">
              <span className="flex items-center gap-2">
                <CertIcon className="h-3.5 w-3.5" aria-hidden="true" />
                certs.log
              </span>
              <span className="pixel-label">{`0${certifications.items.length} earned`}</span>
            </div>
            <ul className="space-y-3 p-5 text-[0.95rem] leading-relaxed text-paper/90 sm:p-6">
              {certifications.items.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-orange" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </RetroCard>
        </div>
      </div>
    </section>
  );
}
