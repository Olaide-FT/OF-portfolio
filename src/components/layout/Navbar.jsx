
import {
  ArrowUpRight,
  CalendarDays,
  Moon,
  MessageCircle,
  Sun,
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onThemeChange, onResumeClick }) {
  return (
    <header className="relative z-30 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-[920px] items-center justify-between gap-3 rounded-full border border-border bg-surface/95 p-2 pl-3 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:w-[calc(100%-2.5rem)] sm:gap-5 sm:pl-5">
      <a href="#home" className="flex shrink-0 items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl border border-border bg-foreground font-mono text-xs font-bold text-background">
          OF
        </span>

        <span className="max-w-[100px] truncate font-display text-xs font-bold text-foreground sm:max-w-none sm:text-sm">
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
            className="text-sm font-semibold text-muted transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onThemeChange}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="grid size-10 place-items-center rounded-full border border-border bg-subtle text-foreground transition hover:border-accent/50 hover:text-accent"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <a
          href="#contact"
          className="hidden min-h-10 items-center gap-2 rounded-full border border-accent/40 px-4 text-sm font-bold text-accent transition-colors hover:bg-accent/10 sm:inline-flex"
        >
          <MessageCircle size={16} />
          Let's Talk
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-3.5 text-xs font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
        >
          <CalendarDays size={16} />
          Hire Me
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
