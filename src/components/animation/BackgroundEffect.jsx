import LivingSignal from "./LivingSignal";

export default function BackgroundEffect() {
  return (
    <div
      className="section-background pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <LivingSignal />
      <div className="portfolio-grid absolute inset-0" />
      <div className="theme-backdrop absolute inset-0" />
    </div>
  );
}
