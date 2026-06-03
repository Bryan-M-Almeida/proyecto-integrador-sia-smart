import React, { useState, useEffect } from "react";
import Sidebar from "./Components/SideBar";
import Header from "./Components/Header";
import ModuleRunner from "./Components/ModuleRunner";
import FooterBanner from "./Components/FooterBanner";
import { ModuleId } from "../types";
import { ALL_MODULES } from "../modulesData";

export default function App() {
  const [selectedModuleId, setSelectedModuleId] = useState<ModuleId>("energy");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize and persist dark mode settings
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const activeModule =
    ALL_MODULES.find((mod) => mod.id === selectedModuleId) || ALL_MODULES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] dark:bg-[#1C1C1E] text-neutral-850 dark:text-neutral-200 transition-colors duration-300 antialiased selection:bg-[#5C6B73]/25 selection:text-neutral-900">
      {/* Upper Main Body Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Responsive Left Sidebar Drawer */}
        <Sidebar
          selectedModuleId={selectedModuleId}
          onSelectModule={(id) => setSelectedModuleId(id)}
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        {/* Right content arena */}
        <div
          id="main-content"
          className="flex-1 flex flex-col h-full overflow-y-auto"
        >
          {/* Header */}
          <Header
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onOpenSidebar={() => setMobileSidebarOpen(true)}
            selectedModuleName={activeModule.name}
          />

          {/* Module description sub-header plain text row */}
          <div className="border-b border-neutral-200 dark:border-neutral-800/80 px-6 py-4 bg-[#F2F1EC] dark:bg-[#232324]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-base font-serif font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {activeModule.name}
                </h2>
                <p className="text-xs text-neutral-650 dark:text-neutral-400 max-w-3xl leading-relaxed font-sans">
                  {activeModule.longDescription}
                </p>
              </div>

              {/* Quiet identifier */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 whitespace-nowrap">
                <span>Cat:</span>
                <span className="uppercase tracking-wider font-semibold">
                  {activeModule.category}
                </span>
              </div>
            </div>
          </div>

          {/* Algorithm Runner and Inputs Display */}
          <main className="flex-1 pb-16">
            <ModuleRunner moduleId={selectedModuleId} />
          </main>
        </div>
      </div>

      {/* Sticky footer repository and download banner */}
      <FooterBanner />
    </div>
  );
}
