import { useState } from "react";
import { Check, Copy, Zap } from "lucide-react";
import BackgroundEffect from "../animation/BackgroundEffect";

const profileSnippet = `const developer = {
  name: "Olaide Faridat Titilope",
  role: "Full-Stack Developer",
  location: "Osogbo, Nigeria",
  stack: ["MongoDB", "Express", "React", "Node.js"],
  specialties: [
    "Responsive Web Applications",
    "REST API Development",
    "Full-Stack Problem Solving",
  ],
};`;

function CodeLine({ children }) {
  return <span className="block min-h-7">{children}</span>;
}

export default function CodeShowcase() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(profileSnippet);
      setCopyStatus("Snippet copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy the snippet. Check your browser clipboard permissions.");
    }

    window.setTimeout(() => setCopyStatus(""), 3000);
  }

  return (
    <section
      id="code"
      aria-labelledby="code-heading"
      className="relative isolate mx-auto w-[calc(100%-2rem)] max-w-[1000px] scroll-mt-8 overflow-hidden pb-10 pt-8 sm:w-[calc(100%-2.5rem)] sm:pb-14 sm:pt-10"
    >
      <BackgroundEffect />
      <div className="relative z-10 rounded-[22px] border border-border bg-card/75 p-5 shadow-[0_24px_100px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <Zap size={18} className="shrink-0 text-amber-400" aria-hidden="true" />
            <h2
              id="code-heading"
              className="truncate font-mono text-sm font-bold text-foreground sm:text-base"
            >
              olaide_profile.js
            </h2>
            <span className="hidden font-mono text-sm text-muted sm:inline">
              — JavaScript / MERN Stack
            </span>
          </div>

          <button
            type="button"
            onClick={copySnippet}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-border bg-subtle px-5 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/5 sm:self-auto"
          >
            {copyStatus.startsWith("Snippet") ? (
              <Check size={16} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            {copyStatus.startsWith("Snippet") ? "Copied" : "Copy Snippet"}
          </button>
        </div>

        <pre className="mt-4 overflow-x-auto rounded-2xl border border-border bg-subtle p-5 font-mono text-[13px] leading-7 text-foreground sm:p-6 sm:text-sm">
          <code>
            <CodeLine>
              <span className="text-muted">// A little about how I build for the web</span>
            </CodeLine>
            <CodeLine>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-accent">developer</span>{" "}
              <span className="text-foreground/70">=</span>{" "}
              <span className="text-amber-300">{"{"}</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">name</span>
              <span className="text-foreground/70">:</span>{" "}
              <span className="text-cyan-400">"Olaide Faridat Titilope"</span>
              <span className="text-foreground/70">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">role</span>
              <span className="text-foreground/70">:</span>{" "}
              <span className="text-cyan-400">"Full-Stack Developer"</span>
              <span className="text-foreground/70">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">location</span>
              <span className="text-foreground/70">:</span>{" "}
              <span className="text-cyan-400">"Osogbo, Nigeria"</span>
              <span className="text-foreground/70">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">stack</span>
              <span className="text-foreground/70">:</span>{" "}
              <span className="text-amber-300">[</span>
              <span className="text-cyan-400">"MongoDB"</span>
              <span className="text-foreground/70">, </span>
              <span className="text-cyan-400">"Express"</span>
              <span className="text-foreground/70">, </span>
              <span className="text-cyan-400">"React"</span>
              <span className="text-foreground/70">, </span>
              <span className="text-cyan-400">"Node.js"</span>
              <span className="text-amber-300">]</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">specialties</span>
              <span className="text-foreground/70">:</span>{" "}
              <span className="text-amber-300">[</span>
            </CodeLine>
            <CodeLine>
              {"    "}
              <span className="text-cyan-400">"Responsive Web Applications"</span>
              <span className="text-foreground/70">,</span>
            </CodeLine>
            <CodeLine>
              {"    "}
              <span className="text-cyan-400">"REST API Development"</span>
              <span className="text-foreground/70">,</span>
            </CodeLine>
            <CodeLine>
              {"    "}
              <span className="text-cyan-400">"Full-Stack Problem Solving"</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-amber-300">]</span>
            </CodeLine>
            <CodeLine>
              <span className="text-amber-300">{"};"}</span>
            </CodeLine>
          </code>
        </pre>

        <p className="sr-only" aria-live="polite">
          {copyStatus}
        </p>
      </div>
    </section>
  );
}
