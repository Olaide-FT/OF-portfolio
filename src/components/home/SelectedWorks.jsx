import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SwiftSats",
    category: "FINTECH / WEB3",
    description:
      "A crypto-purchase and Naira-settlement experience. The product flow guides users through choosing an asset and amount, reviewing payment instructions, and following transaction status in a responsive interface.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "FRONTEND", value: "React" },
      { label: "API", value: "Node.js · Express" },
      { label: "DATABASE", value: "MongoDB" }
    ],
    liveUrl: "https://swiftsat.app",
  },
  {
    title: "Axiom Wallets",
    category: "FINTECH / WEB3",
    description:
      "A digital-wallet and trading application experience focused on account access, wallet activity, market information, and deposit and withdrawal flows, brought together in a responsive full-stack interface.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Bootstrap"],
    metrics: [
      { label: "FRONTEND", value: "React" },
      { label: "API", value: "Node.js · Express" },
      { label: "DATABASE", value: "MongoDB" }
    ],
    liveUrl: "https://axiom.app",
  },
  {
    title: "9jaCash",
    category: "FINTECH / PRODUCTION",
    description:
      "A fintech application focused on clear transaction and account-management workflows. The experience brings responsive screens, structured data views, and practical admin tools together.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"],
    metrics: [
      { label: "FRONTEND", value: "React" },
      { label: "API", value: "Node.js · Express" },
      { label: "DATABASE", value: "MongoDB" }
    ],
    liveUrl: "https://9jacash.app",
  }
];

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative isolate overflow-hidden bg-black py-24">
      {/* Background Grid Pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 opacity-50" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} 
      />

      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1000px] text-center sm:w-[calc(100%-2.5rem)]">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Selected Works
        </h2>
        
        {/* Filter Pills */}
        <div className="mt-8 grid grid-cols-3 ">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto mt-16 grid w-[calc(100%-2rem)] max-w-[1000px] grid-cols-1 gap-6 sm:w-[calc(100%-2.5rem)] lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article 
            key={project.title}
            className="relative flex flex-col justify-between rounded-[28px] border border-white/15 bg-[#0a0a0d]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div>
              {/* Window Controls / Category Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-yellow-500/80" />
                  <span className="size-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-zinc-400">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Metrics Grid */}
              <div className="mt-8 grid grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-black/60 p-3 text-center sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-zinc-500">{metric.label}</span>
                    <span className="mt-1 font-display text-xs font-bold text-white sm:text-sm">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white py-3 text-xs font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  <span>{project.liveUrl.replace("https://", "")}</span>
                  <ExternalLink size={14} className="text-orange-500" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}