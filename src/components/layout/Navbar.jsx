
import {
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onResumeClick }) {
  return (
    <header className="relative z-30 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-[920px] items-center justify-between gap-3 rounded-full border border-white/15 bg-[#101116]/95 p-2 pl-3 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:w-[calc(100%-2.5rem)] sm:gap-5 sm:pl-5">
      <a href="#home" className="flex shrink-0 items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl border border-white/30 bg-gradient-to-br from-zinc-500 to-zinc-900 font-mono text-xs font-bold text-white">
          OF
        </span>

        <span className="max-w-[100px] truncate font-display text-xs font-bold text-white sm:max-w-none sm:text-sm">
          OLAIDE FARIDAT
        </span>
      </a>

      <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={
              link.label === "Resume"
                ? (event) => {
                    event.preventDefault();
                    onResumeClick();
                  }
                : undefined
            }
            className="text-sm font-semibold text-zinc-400 transition-colors hover:text-[#C5F467]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <a
          href="#contact"
          className="hidden min-h-10 items-center gap-2 rounded-full border border-green-500/50 px-4 text-sm font-bold text-green-400 transition-colors hover:bg-green-500/10 sm:inline-flex"
        >
          <MessageCircle size={16} />
          Let's Talk
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-3.5 text-xs font-bold text-black transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
        >
          <CalendarDays size={16} />
          Hire Me
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
