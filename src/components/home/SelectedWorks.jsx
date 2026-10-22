
import {
    ArrowUpRight,
    ExternalLink,
    GitFork,
    FolderCode,
} from "lucide-react";
import BackgroundEffect from "../animation/BackgroundEffect";

const projects = [
    {
        title: "E-commerce",
        status: "Live",
        description:
            "A product-focused shopping interface showcasing responsive layouts, reusable UI elements, and clean product presentation.",
        image: "/pictures/E-commerce.png",
        imageAlt: "E-commerce product card project preview",
        technologies: ["HTML", "Tailwind CSS", "JavaScript"],
        demo: "https://product-card-eight.vercel.app/",
        github: "https://github.com/Olaide-FT/Product_Card",
        featured: true,
    },
    {
        title: "Music Player",
        status: "Interactive",
        description:
            "A responsive music player with intuitive playback controls and a polished interface built for an engaging listening experience.",
        image: "/pictures/Music Player.png",
        imageAlt: "Music player project preview",
        technologies: ["HTML", "Tailwind CSS", "JavaScript"],
        demo: "https://code-alpha-musicplayer-mu.vercel.app/",
        github: "https://github.com/Olaide-FT/CodeAlpha_Musicplayer",
        featured: false,
    },
    {
        title: "DishShare",
        status: "Personal Project",
        description:
            "A recipe discovery experience that helps users explore recipes through an accessible, user-friendly interface.",
        image: "/pictures/Recipe Sharing.png",
        imageAlt: "DishShare recipe sharing project preview",
        technologies: ["HTML", "Tailwind CSS", "JavaScript"],
        demo: "https://dish-share-p42u.vercel.app/",
        github: "https://github.com/Olaide-FT/Dish_Share",
        featured: false,
    },
];

function ProjectCard({ project, index }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-card shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:rounded-[28px]">
            {/* Project image */}
            <div className="relative overflow-hidden border-b border-border bg-subtle">
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground">
                        {project.status}
                    </span>
                </div>

                <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-56"
                />

                <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full border border-border bg-card/90 text-accent opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                </span>
            </div>

            {/* Project details */}
            <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                            PROJECT 0{index + 1}
                        </p>

                        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                            {project.title}
                        </h3>
                    </div>

                    <FolderCode
                        size={20}
                        className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                    />
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                    {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-border bg-subtle px-3 py-1.5 font-mono text-[11px] font-medium text-muted"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Project links */}
                <div className="mt-6 flex flex-wrap gap-3  border-border pt-5">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:brightness-105"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-subtle px-4 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                    >
                        <GitFork size={17} />
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden  border-border bg-background/60 py-16 sm:py-20 lg:py-24"
        >
            <BackgroundEffect />
            {/* Subtle grid background matching the hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-35"
                style={{
                    backgroundImage:
                        "linear-gradient(color-mix(in srgb, var(--color-foreground) 4%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-foreground) 4%, transparent) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="pointer-events-none absolute -right-40 top-20 z-0 size-96 rounded-full bg-accent/[0.06] blur-3xl" />

            <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1000px] sm:w-[calc(100%-2.5rem)]">
                {/* Section heading */}
                <div className="flex flex-col gap-6 border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs">
                            <span className="size-1.5 rounded-full bg-accent" />
                            Project Gallery
                        </p>

                        <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                            Selected{" "}
                            <span className="text-accent">works.</span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                            A selection of projects where I turn ideas into useful,
                            responsive digital experiences.
                        </p>
                    </div>

                    <a
                        href="https://github.com/Olaide-FT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border bg-subtle px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:text-accent"
                    >
                        More on GitHub
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Project grid */}
                <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}
