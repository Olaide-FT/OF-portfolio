import {
  Cloud,
  Code,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import BackgroundEffect from "../animation/BackgroundEffect";

const tools = [
  { name: "MongoDB", icon: Database },
  { name: "Express.js", icon: Server },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Terminal },
  { name: "JavaScript", icon: Code },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Bootstrap", icon: Monitor },
  { name: "Git", icon: GitBranch },
  { name: "Render", icon: Cloud },
];

export default function EngineeringFoundation() {
  return (
    <section className="relative isolate overflow-hidden bg-background/60 py-20">
      <BackgroundEffect />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--color-foreground) 4%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-foreground) 4%, transparent) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1000px] text-center sm:w-[calc(100%-2.5rem)]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          About Me
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Engineering Foundation
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-12 grid w-[calc(100%-2rem)] max-w-[1000px] grid-cols-1 gap-8 sm:w-[calc(100%-2.5rem)] lg:grid-cols-2">
        <div className="relative flex flex-col justify-between rounded-[28px] border border-border bg-card p-8 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-10">
          <div>
            <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-subtle text-accent">
              <Rocket size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
              Full-Stack Discipline
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Based in Osogbo, Nigeria, I build responsive web applications
              across the MERN stack. I work with React interfaces, Node.js and
              Express backends, MongoDB data, and REST APIs to bring practical
              full-stack products together.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-subtle px-4 py-2 text-xs font-semibold text-foreground">
              <span className="size-2 rounded-full bg-amber-400" />
              MERN Stack Development
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-subtle px-4 py-2 text-xs font-semibold text-foreground">
              <span className="size-2 rounded-full bg-cyan-400" />
              Responsive Web Applications
            </span>
          </div>
        </div>

        <div className="relative flex flex-col justify-between rounded-[28px] border border-border bg-card p-8 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-10">
          <div>
            <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-subtle text-accent">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
              Frontend & API Development
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              I build clear, responsive React interfaces and connect them to
              backend functionality through Node.js, Express, and REST APIs.
              My focus is practical application features, clean data flow, and
              consistent experiences across screen sizes.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-subtle p-4 font-mono text-xs text-muted">
            <div className="flex items-center justify-between border-b border-border py-1.5">
              <span className="text-muted">Frontend</span>
              <span className="font-bold text-foreground">React</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-muted">Backend & data</span>
              <span className="font-bold text-accent">
                Node.js · Express · MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 w-[calc(100%-2rem)] max-w-[1000px] overflow-hidden rounded-[24px] border border-border bg-card/75 py-6 sm:w-[calc(100%-2.5rem)]">
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {[0, 1].map((loop) => (
            <div
              key={loop}
              aria-hidden={loop === 1}
              className="flex shrink-0 animate-marquee items-center gap-6 px-3"
            >
              {tools.map(({ name, icon: Icon }) => (
                <div
                  key={`${loop}-${name}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-border bg-subtle px-5 py-2.5 text-sm font-medium text-foreground shadow-inner backdrop-blur-md"
                >
                  <Icon
                    size={15}
                    className="text-accent"
                    aria-hidden="true"
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
