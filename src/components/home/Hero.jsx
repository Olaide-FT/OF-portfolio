
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  FileText,
  FolderKanban,
  Info,
  MessageCircle,
} from "lucide-react";

const specialties = [
  "MERN Stack Development",
  "Responsive Web Applications",
  "REST API Development",
  "Full-Stack Problem Solving",
];

const tabs = [
  { label: "Code", icon: Code2, href: "#code" },
  { label: "Resume", icon: FileText, href: "#resume" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Info", icon: Info, href: "#about" },
];

export default function Hero({ activePanel, onPanelChange }) {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Code");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpecialtyIndex(
        (current) => (current + 1) % specialties.length
      );
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate mx-auto mt-12 flex min-h-[600px] w-[calc(100%-2rem)] max-w-[1000px] flex-col overflow-hidden rounded-[22px] border border-white/20 bg-[#090a0b]/90 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:w-[calc(100%-2.5rem)] sm:rounded-[28px]"
    >
      {/* Centered Hero Card Wrapper */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-4 pb-8 pt-4 sm:px-8 sm:pb-10 sm:pt-5 lg:px-10">

      {/* Browser-Style Status Bar */}
      <div className="relative z-10 mt-2 grid min-h-10 w-full grid-cols-[1fr_auto] items-center border-b border-white/[0.08] px-1 pb-3 sm:px-3 sm:grid-cols-3">
        <div
          className="flex items-center gap-2.5"
          aria-hidden="true"
        >
          <span className="size-3.5 rounded-full bg-red-500/90" />
          <span className="size-3.5 rounded-full bg-yellow-500/90" />
          <span className="size-3.5 rounded-full bg-green-500/90" />
        </div>

        <p className="hidden text-center font-mono text-xs font-bold tracking-[0.12em] text-zinc-500 sm:block">
          OLAIDE Faridat// FULL-STACK DEVELOPER
        </p>

        <div className="flex items-center justify-end gap-2 font-mono text-[10px] font-bold text-zinc-400 sm:text-xs">
          <span className="size-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
          AVAILABLE
        </div>
      </div>
        {/* Hero content shares the main framed panel with the status bar. */}
        <div className="relative mt-5 w-full max-w-[920px] px-1 py-4 text-center sm:mt-6 sm:px-6 sm:py-5">
          {/* Card Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#C5F467]/[0.08] blur-[90px]" />

          {/* Card Content */}
          <div className="relative z-10">
            {/* Name */}
            <h1 className="font-display text-[clamp(2.25rem,5.1vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.05em] text-zinc-100 [text-wrap:balance]">
              Olaide Faridat
              {" "}
              <span className="bg-gradient-to-r from-zinc-100 to-[#A9B9CE] bg-clip-text text-transparent">
                Titilope
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="mt-3 text-base font-bold tracking-tight text-zinc-400 sm:text-xl lg:text-2xl">
              Full-Stack Developer
              <span className="text-[#C5F467]"> & </span>
              MERN Stack Developer
            </h2>

            {/* Animated Expertise */}
            <div
              className="mt-4 flex min-h-8 flex-wrap items-center justify-center gap-2 text-sm font-bold sm:text-base"
              aria-live="polite"
            >
              <span className="text-white">Expertise:</span>

              <span
                key={specialtyIndex}
                className="animate-[expertise-enter_350ms_ease_both] text-[#A9B9CE]"
              >
                {specialties[specialtyIndex]}
              </span>

              <span
                className="h-5 w-0.5 animate-pulse bg-[#C5F467]"
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              I build responsive web applications, practical digital products,
              and reliable full-stack experiences using modern JavaScript
              technologies.
            </p>

            {/* Location */}
            <div className="mt-6 flex items-center justify-center gap-3 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 sm:text-xs">
              <span className="h-px w-7 bg-zinc-600 sm:w-12" />
              OSOGBO, NIGERIA
              <span className="h-px w-7 bg-zinc-600 sm:w-12" />
            </div>

            {/* Segmented Navigation */}
            <nav
              aria-label="Explore portfolio"
              className="mx-auto mt-6 flex w-full max-w-[400px] items-center gap-1 rounded-full border border-white/10 bg-[#141419]/90 p-1.5 shadow-xl"
            >
              {tabs.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(event) => {
                    setActiveTab(label);

                    if (label === "Code" || label === "Resume") {
                      event.preventDefault();
                      onPanelChange(label.toLowerCase());
                    }
                  }}
                  aria-current={
                    (activePanel === "resume" ? "Resume" : activeTab) === label
                      ? "page"
                      : undefined
                  }
                  className={`flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-2 text-xs font-bold transition-all duration-300 sm:min-h-12 sm:px-4 sm:text-sm ${
                    activeTab === label
                      ? "bg-[#2b2b32] text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={15} className="hidden sm:block" />
                  {label}
                </a>
              ))}
            </nav>

            {/* Primary Calls to Action */}
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100"
              >
                <span className="text-lg">ϟ</span>
                Explore Work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24D16C] px-6 py-3 font-bold text-[#062c17] transition-all duration-300 hover:-translate-y-1 hover:bg-[#48e584]"
              >
                <MessageCircle size={18} />
                Let's Connect
              </a>

              <button
                type="button"
                onClick={() => onPanelChange("resume")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-bold text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-white/40"
              >
                <FileText size={17} />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
