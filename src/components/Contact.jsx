import { Download, Github, Linkedin, Mail } from "lucide-react";
import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import PixelAvatar from "./PixelAvatar";
import { profile } from "../data/portfolioData";

const buttons = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
    variant: "btn-retro btn-retro--ghost"
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    external: true,
    variant: "btn-retro btn-retro--ghost"
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    variant: "btn-retro btn-retro--ghost"
  },
  {
    label: "Download Resume",
    href: profile.resume,
    icon: Download,
    external: true,
    variant: "btn-retro btn-retro--orange"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Sign-off"
        title="Let's build audit-ready security programs."
        description="Open to GRC, IT Risk, Security Compliance, Cybersecurity Compliance, Security Control Assessment, IT Audit, and Information Security opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <RetroCard tone="paper" hover={false} className="p-0">
          <div className="titlebar">
            <span>contact.card</span>
            <span className="titlebar-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="p-5 sm:p-7">
            <div className="flex items-center gap-4">
              <PixelAvatar size={56} />
              <div>
                <p className="pixel-display text-[1.6rem] text-ink">{profile.name}</p>
                <p className="pixel-label text-rust">{profile.role}</p>
              </div>
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border-2 border-ink bg-cream p-3">
                <dt className="pixel-label text-rust">Email</dt>
                <dd className="mt-1 text-[0.95rem] text-ink">{profile.email}</dd>
              </div>
              <div className="border-2 border-ink bg-cream p-3">
                <dt className="pixel-label text-rust">Location</dt>
                <dd className="mt-1 text-[0.95rem] text-ink">{profile.location}</dd>
              </div>
              <div className="border-2 border-ink bg-cream p-3 sm:col-span-2">
                <dt className="pixel-label text-rust">Status</dt>
                <dd className="mt-1 flex items-center gap-2 text-[0.95rem] text-ink">
                  <span aria-hidden="true" className="h-2.5 w-2.5 bg-success" />
                  {profile.availability}
                </dd>
              </div>
            </dl>
          </div>
        </RetroCard>

        <RetroCard tone="dark" hover={false} className="p-0">
          <div className="titlebar bg-orange text-ink">
            <span>send.message</span>
            <span className="pixel-label">channels</span>
          </div>
          <div className="grid gap-3 p-5 sm:p-6">
            {buttons.map((button) => {
              const Icon = button.icon;
              return (
                <a
                  key={button.label}
                  href={button.href}
                  target={button.href === profile.resume ? undefined : (button.external ? "_blank" : undefined)}
                  rel={button.href === profile.resume ? undefined : (button.external ? "noreferrer" : undefined)}
                  download={button.href === profile.resume ? true : undefined}
                  className={`${button.variant} w-full justify-between`}
                  aria-label={button.label}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {button.label}
                  </span>
                  <span aria-hidden="true">{">"}</span>
                </a>
              );
            })}
            <p className="pixel-label mt-2 text-paper/70">
              Replies usually within a business day.
            </p>
          </div>
        </RetroCard>
      </div>
    </section>
  );
}
