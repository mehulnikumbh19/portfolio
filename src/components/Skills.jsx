import Badge from "./Badge";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills and Tools"
        title="Governance depth with technical security context"
        description="Grouped badges for control testing, frameworks, IAM risk, security tools, and reporting workflows."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <GlassCard key={group.title} delay={index * 0.06} className={index === 0 ? "p-6 lg:col-span-2" : "p-6"}>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow">Group {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="display-3 mt-1">{group.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <Badge key={skill} tone={skillIndex % 5 === 0 ? "accent" : "default"}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
