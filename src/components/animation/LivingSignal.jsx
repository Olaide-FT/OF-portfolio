import "./BackgroundEffect.css";
import { useEffect, useRef } from "react";

export default function LivingSignal() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrame;
    let width = 0;
    let height = 0;
    let particles = [];
    let pointer = { x: -1000, y: -1000 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? 30 : 65;

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.8 + 0.8,
      }));

      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const connectionDistance = width < 640 ? 75 : 115;

      particles.forEach((particle, index) => {
        if (!motionQuery.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) {
            particle.vx *= -1;
          }

          if (particle.y < 0 || particle.y > height) {
            particle.vy *= -1;
          }

          particle.x = Math.max(0, Math.min(width, particle.x));
          particle.y = Math.max(0, Math.min(height, particle.y));
        }

        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distanceToPointer = Math.hypot(dx, dy);

        if (!motionQuery.matches && distanceToPointer < 140) {
          particle.x -= dx * 0.0008;
          particle.y -= dy * 0.0008;
        }

        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y
          );

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;

            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(235, 239, 244, ${opacity * 0.16})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius * 3,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(235, 239, 244, 0.08)";
        context.fill();

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(235, 239, 244, 0.75)";
        context.fill();
      });

      if (!motionQuery.matches) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const resetPointer = () => {
      pointer = { x: -1000, y: -1000 };
    };

    resize();

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", resetPointer);
    motionQuery.addEventListener("change", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", resetPointer);
      motionQuery.removeEventListener("change", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="signal-canvas"
    />
  );
}
