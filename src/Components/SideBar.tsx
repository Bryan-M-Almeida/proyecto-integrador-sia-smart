import React, { useState } from "react";
import { ModuleConfig, ModuleId } from "../../types";
import { ALL_MODULES } from "../../modulesData";
import {
  Zap,
  ShieldAlert,
  Network,
  Wrench,
  Leaf,
  Activity,
  Fingerprint,
  CornerDownRight,
  Droplets,
  Receipt,
  Search,
  Filter,
  Layers,
  Menu,
  X,
} from "lucide-react";

// Map icon names to components
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  ShieldAlert,
  Network,
  Wrench,
  Leaf,
  Activity,
  Fingerprint,
  CornerDownRight,
  Droplets,
  Receipt,
};

interface SidebarProps {
  selectedModuleId: ModuleId;
  onSelectModule: (id: ModuleId) => void;
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_NAMES: Record<string, { label: string; color: string }> = {
  energia: {
    label: "Energía y Servicios",
    color: "text-amber-500 bg-amber-500/10",
  },
  redes: { label: "Redes y Accesos", color: "text-blue-500 bg-blue-500/10" },
  soporte: { label: "Soporte Técnico", color: "text-rose-500 bg-rose-500/10" },
  seguridad: {
    label: "Seguridad Urbana",
    color: "text-violet-500 bg-violet-500/10",
  },
  ambiente: { label: "Medio Ambiente", color: "text-teal-500 bg-teal-500/10" },
};
export default function Sidebar({
  selectedModuleId,
  onSelectModule,
  isOpen,
  onClose,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredModules = ALL_MODULES.filter((mod) => {
    const matchesSearch =
      mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || mod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    "energia",
    "redes",
    "soporte",
    "seguridad",
    "ambiente",
  ];

  return (
    <>
      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#1C1C1E]/40 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside
        id="sidebar"
        className={`
          fixed top-0 bottom-0 left-0 z-50 flex flex-col w-72 bg-[#F5F4F0] dark:bg-[#1E1E1F] border-r border-neutral-250 dark:border-neutral-800
          transform lg:transform-none transition-transform duration-300 ease-in-out
          lg:static lg:h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Brand / Logo Area */}
        <div className="flex flex-col p-6 border-b border-neutral-250 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-serif font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                SIA-INDICE
              </span>
              <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                Catálogo de Simulación v1.0
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 lg:hidden focus:outline-none"
              title="Cerrar menú"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Searching and Filtering Controls */}
        <div className="p-4 space-y-3 border-b border-neutral-250 dark:border-neutral-800 bg-[#EFECE6]/40 dark:bg-[#252526]/30">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar módulo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-3 py-1.5 font-mono text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
            />
          </div>

          {/* Utility Selector Pills - Redesigned as clean bordered boxes */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-2 py-0.5 text-[9px] font-mono rounded-none uppercase transition-all border
                    ${
                      isActive
                        ? "bg-[#5C6B73] border-[#5C6B73] text-white"
                        : "bg-transparent border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }
                  `}
                >
                  {cat === "all" ? "todos" : cat.slice(0, 9)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modules List Scrolling Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {filteredModules.length === 0 ? (
            <div className="text-center py-8 text-neutral-400 dark:text-neutral-600">
              <p className="text-xs font-mono">Sin resultados.</p>
            </div>
          ) : (
            <div className="space-y-1 bg-white dark:bg-[#1A1A1B] border border-neutral-200 dark:border-neutral-800 p-2">
              {filteredModules.map((mod, index) => {
                const isSelected = selectedModuleId === mod.id;
                const formattedIndex = (index + 1).toString().padStart(2, "0");

                return (
                  <button
                    key={mod.id}
                    onClick={() => {
                      onSelectModule(mod.id);
                      onClose(); // Auto-close on mobile
                    }}
                    className={`
                      w-full flex items-start gap-2.5 p-2 rounded-none text-left transition-all border-b border-neutral-100 dark:border-neutral-850/50 last:border-0
                      ${
                        isSelected
                          ? "bg-[#EAE8E2] dark:bg-[#2C2C2D] text-neutral-900 dark:text-neutral-100 font-bold border-l-2 border-[#5C6B73]"
                          : "hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-neutral-650 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                      }
                    `}
                  >
                    <span className="font-mono text-[10px] text-neutral-400 mt-0.5">
                      [{formattedIndex}]
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-serif text-xs font-bold leading-tight block">
                          {mod.name}
                        </span>
                      </div>
                      <p className="font-sans text-[10px] text-neutral-500 dark:text-neutral-450 truncate mt-0.5 leading-normal">
                        {mod.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar Info Banner - clean text block with border */}
        <div className="p-4 mx-4 mb-4 border border-neutral-250 dark:border-neutral-800 bg-[#FAF9F5]/50 dark:bg-[#1C1C1E]/50 font-sans">
          <div className="flex items-center gap-1.5 mb-1 text-neutral-700 dark:text-neutral-300">
            <span className="font-mono text-[10px] font-bold uppercase">
              // CONTROL REGISTRADO
            </span>
          </div>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-normal">
            Este panel interactivo genera diagnósticos de simulación de
            infraestructura correspondientes al Plan Director de Ingeniería
            Civil Urbana.
          </p>
        </div>
      </aside>
    </>
  );
}
