import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon, Database, Clock } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSidebar: () => void;
  selectedModuleName: string;
}

export default function Header({
  darkMode,
  onToggleDarkMode,
  onOpenSidebar,
  selectedModuleName,
}: HeaderProps) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    // Keep a ticking clock matching general format
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3.5 bg-[#FAF9F5]/90 dark:bg-[#1C1C1E]/90 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-1.5 rounded-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 lg:hidden text-neutral-700 dark:text-neutral-300 transition-colors"
          title="Abrir menú"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
            SIA-Smart
          </h1>
          <p className="hidden md:block font-mono text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Proyecto Integrador • Laboratorio de Automatización Urbana
          </p>
        </div>
      </div>

      {/* Settings / Actions / Clock Area */}
      <div className="flex items-center gap-4">
        {/* Responsive UTC Clock */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800">
          <span className="font-mono text-[10px] text-neutral-600 dark:text-neutral-400">
           {timeStr || "Cargando..."}
          </span>
        </div>

        {/* Database Online Status indicator - desaturated text */}
        <div className="flex items-center gap-1 px-2 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800 font-mono text-[10px] text-neutral-600 dark:text-neutral-400 font-medium">
          <span>[SIA.ESTADO: LOCAL]</span>
        </div>

      </div>
    </header>
  );
}
