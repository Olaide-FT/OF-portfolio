import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Resume from "./components/home/Resume";
import CodeShowcase from "./components/home/CodeShowcase";
import StatsSection from "./components/home/StatsSection";
import LivingSignal from "./components/animation/LivingSignal";
import EngineeringFoundation from "./components/home/EngineeringFoundation";
import SelectedWorks from "./components/home/SelectedWorks";

export default function App() {
  const [activePanel, setActivePanel] = useState("code");

  function showPanel(panel) {
    setActivePanel(panel);
    window.setTimeout(() => {
      document.getElementById(panel)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <LivingSignal />
        <div className="portfolio-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(25,29,27,0.25),transparent_65%),linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(5,6,6,0.4))]" />
      </div>

      <Navbar onResumeClick={() => showPanel("resume")} />

      <main className="relative z-10">
        <Hero activePanel={activePanel} onPanelChange={showPanel} />
        {activePanel === "code" ? <CodeShowcase /> : <Resume />}
        <StatsSection />
        <EngineeringFoundation />
        <SelectedWorks />
      </main>

      {/* Keep your existing footer here. */}
    </div>
  );
}