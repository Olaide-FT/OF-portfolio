import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  MapPin,
  Server,
} from "lucide-react";
import BackgroundEffect from "../animation/BackgroundEffect";

const resumeAreas = [
  {
    title: "Full-Stack Development",
    icon: BriefcaseBusiness,
    description:
      "Building practical web applications and full-stack products with the MERN stack.",
  },
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "Creating responsive interfaces with a focus on usability and consistent layouts.",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description:
      "Developing REST APIs and connecting frontend experiences to reliable application logic.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="relative isolate mx-auto w-[calc(100%-2rem)] max-w-[1000px] scroll-mt-8 overflow-hidden pb-16 pt-10 sm:w-[calc(100%-2.5rem)] sm:pb-24 sm:pt-14"
    >
      <BackgroundEffect />
      <div className="relative z-10 rounded-[22px] border border-border bg-card/75 p-5 shadow-[0_24px_100px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <FileText className="text-muted" size={21} aria-hidden="true" />
              <h2
                id="resume-heading"
                className="font-display text-xl font-bold text-foreground sm:text-2xl"
              >
                Olaide Faridat Titilope
              </h2>
              <span className="rounded-full border border-border bg-subtle px-3 py-1 text-xs font-semibold text-muted">
                Full-Stack Developer
              </span>
            </div>
            <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span>MERN Stack</span>
              <span aria-hidden="true">•</span>
              <span>REST API Development</span>
              <span aria-hidden="true">•</span>
              <MapPin size={14} aria-hidden="true" />
              <span>Osogbo, Nigeria</span>
            </p>
          </div>

          <a
            href="#resume-timeline"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground shadow-[0_0_30px_rgba(240,100,90,0.18)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            View Full Timeline
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-subtle p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Professional Summary
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Full-stack developer focused on building responsive web
              applications, practical digital products, and reliable user
              experiences.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-subtle p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Key Specialties
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-5 text-muted">
              <li>MERN stack development</li>
              <li>Responsive web applications</li>
              <li>REST API development</li>
              <li>Full-stack problem solving</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-subtle p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Current Focus
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Turning product ideas into maintainable applications with
              thoughtful interfaces and dependable functionality.
            </p>
          </article>
        </div>

        <div
          id="resume-timeline"
          className="scroll-mt-8 border-t border-border pt-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                Areas of work
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                Full-Stack Development Focus
              </h3>
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition hover:text-foreground"
            >
              Back to top
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {resumeAreas.map(({ title, icon: Icon, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-subtle p-5"
              >
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <h4 className="mt-3 font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}