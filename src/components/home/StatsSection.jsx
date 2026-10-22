
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "1+ Years",
    title: "Production Experience",
    description: "MERN Stack Development and Deployment",
  },
  {
    value: "10+ Live",
    title: "Deployed Deliveries",
    description: "Frontend and Backend Applications in Production",
  },
  {
    value: "100% Rate",
    title: "On-Time Completion",
    description: "Zero Missed Deadlines",
  },
  {
    value: "10+",
    title: "Engineering Commits",
    description: "Clean Modular Repositories",
  },
];

function StatsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let particles = [];
    let frameId;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: Math.max(12, Math.floor(width / 85)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.2,
      }));

      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reducedMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        }

        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y
          );

          if (distance < 155) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(160, 160, 170, ${
              (1 - distance / 155) * 0.13
            })`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(220, 220, 230, 0.65)";
        context.shadowColor = "#ffffff";
        context.shadowBlur = particle.radius > 2 ? 10 : 3;
        context.fill();
        context.shadowBlur = 0;
      });

      if (!reducedMotion.matches) {
        frameId = requestAnimationFrame(draw);
      }
    };

    resize();

    window.addEventListener("resize", resize);
    reducedMotion.addEventListener("change", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      reducedMotion.removeEventListener("change", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export default function StatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-12">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <StatsBackground />
      </div>

      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[1000px] grid-cols-1 gap-4 sm:w-[calc(100%-2.5rem)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="flex min-h-[175px] flex-col items-center justify-center rounded-[21px] border border-white/[0.15] bg-[#0a0a0d]/95 px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:min-h-[175px]"
          >
            <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.25rem)] font-bold leading-tight tracking-[-0.045em] text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm font-bold tracking-tight text-zinc-100">
              {stat.title}
            </p>

            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
