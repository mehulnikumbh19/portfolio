import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { contactLinks, profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="I am open to GRC, IT Risk, Security Compliance, Cybersecurity Compliance, Security Control Assessment, IT Audit, and Information Security opportunities."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
        <GlassCard className="p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/[0.24] p-4 transition duration-200 ease-out-expo hover:-translate-y-1 hover:border-cyan-300/35 hover:text-cyan-100"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                    <span className="font-semibold">{link.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="eyebrow mb-4">Contact Card</p>
          <h3 className="display-3">{profile.name}</h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-500">Email</dt>
              <dd className="text-cyan-100">{profile.email}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-500">Location</dt>
              <dd className="text-slate-100">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Focus</dt>
              <dd className="max-w-xs text-right text-slate-100">Cybersecurity GRC, IT Risk, Security Compliance, Audit Readiness</dd>
            </div>
          </dl>
        </GlassCard>
      </div>
    </section>
  );
}
