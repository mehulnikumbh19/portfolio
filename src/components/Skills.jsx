import Badge from "./Badge";
import SectionTitle from "./SectionTitle";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="band band-dark">
      <div className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="Toolbox"
        title="Skills"
        description="Four groups, straight from the resume."
      />

      <div className="retro-card retro-card--dark scanlines overflow-hidden p-0">
        <div className="titlebar bg-ink">
          <span>skills.cfg</span>
          <span className="titlebar-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>

        <ul className="divide-y-2 divide-orange/40">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <li
                key={group.title}
                className="grid gap-4 p-5 sm:p-6 md:grid-cols-[0.32fr_1fr] md:items-start"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center border-2 border-orange bg-cream text-orange">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <div>
                    <p className="pixel-label text-orange">{`Group 0${index + 1}`}</p>
                    <h3 className="pixel-heading text-[1.45rem] text-paper">{group.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} tone="cream" className="border-orange">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
}
