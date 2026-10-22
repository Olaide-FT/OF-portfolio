import { useState } from "react";
import { Check, Copy, Zap } from "lucide-react";

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
      className="mx-auto w-[calc(100%-2rem)] max-w-[1000px] scroll-mt-8 pb-10 pt-8 sm:w-[calc(100%-2.5rem)] sm:pb-14 sm:pt-10"
    >
      <div className="rounded-[22px] border border-white/30 bg-[#090a0b]/95 p-5 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:rounded-[28px] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <Zap size={18} className="shrink-0 text-amber-400" aria-hidden="true" />
            <h2
              id="code-heading"
              className="truncate font-mono text-sm font-bold text-zinc-100 sm:text-base"
            >
              olaide_profile.js
            </h2>
            <span className="hidden font-mono text-sm text-zinc-500 sm:inline">
              — JavaScript / MERN Stack
            </span>
          </div>

          <button
            type="button"
            onClick={copySnippet}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-white/20 bg-white/[0.06] px-5 text-sm font-semibold text-zinc-100 transition hover:border-white/40 hover:bg-white/10 sm:self-auto"
          >
            {copyStatus.startsWith("Snippet") ? (
              <Check size={16} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            {copyStatus.startsWith("Snippet") ? "Copied" : "Copy Snippet"}
          </button>
        </div>

        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-[#08090c] p-5 font-mono text-[13px] leading-7 text-zinc-200 sm:p-6 sm:text-sm">
          <code>
            <CodeLine>
              <span className="text-zinc-500">// A little about how I build for the web</span>
            </CodeLine>
            <CodeLine>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-white">developer</span>{" "}
              <span className="text-zinc-400">=</span>{" "}
              <span className="text-amber-300">{"{"}</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">name</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-cyan-400">"Olaide Faridat Titilope"</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">role</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-cyan-400">"Full-Stack Developer"</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">location</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-cyan-400">"Osogbo, Nigeria"</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">stack</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-amber-300">[</span>
              <span className="text-cyan-400">"MongoDB"</span>
              <span className="text-zinc-400">, </span>
              <span className="text-cyan-400">"Express"</span>
              <span className="text-zinc-400">, </span>
              <span className="text-cyan-400">"React"</span>
              <span className="text-zinc-400">, </span>
              <span className="text-cyan-400">"Node.js"</span>
              <span className="text-amber-300">]</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"  "}
              <span className="text-sky-300">specialties</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-amber-300">[</span>
            </CodeLine>
            <CodeLine>
              {"    "}
              <span className="text-cyan-400">"Responsive Web Applications"</span>
              <span className="text-zinc-400">,</span>
            </CodeLine>
            <CodeLine>
              {"    "}
              <span className="text-cyan-400">"REST API Development"</span>
              <span className="text-zinc-400">,</span>
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
