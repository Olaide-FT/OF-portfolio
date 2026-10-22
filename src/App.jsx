import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Resume from "./components/home/Resume";
import CodeShowcase from "./components/home/CodeShowcase";
import StatsSection from "./components/home/StatsSection";
import EngineeringFoundation from "./components/home/EngineeringFoundation";
import SelectedWorks from "./components/home/SelectedWorks";

export default function App() {
  const [activePanel, setActivePanel] = useState("code");
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

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
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar
        theme={theme}
        onThemeChange={() => setTheme((current) => current === "light" ? "dark" : "light")}
        onResumeClick={() => showPanel("resume")}
      />

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