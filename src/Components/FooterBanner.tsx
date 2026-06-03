import React from "react";
import { Download, Terminal, Info } from "lucide-react";
export default function FooterBanner() {
  return (
    <footer className="fixed bottom-0 z-100 w-full bg-[#F2F1EC] dark:bg-[#232324] border-t border-neutral-250 dark:border-neutral-800 px-6 py-4 font-mono text-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Description and Python notice */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="text-neutral-800 dark:text-neutral-200 font-bold lowercase tracking-normal">
            sia-smart.py // apéndice interactivo offline
          </h4>

          <p className="text-neutral-500 dark:text-neutral-405 leading-normal">
            mecanismo redactado en python 3.0. apto para su ejecución directa
            desde consola local de terminal sin dependencias externas.
          </p>
        </div>

        {/* Right Side: Simple Bordered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Download button */}
          <a
            href="../siaSmart.py"
            download
            className="px-3 py-1.5 border border-neutral-400 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 transition-colors cursor-pointer text-[10px] font-bold"
            title="Descargar código ejecutable .py"
          >
            descargar.py
          </a>

          {/* GitHub button */}
          <a
            href="https://github.com/Bryan-M-Almeida/proyecto-integrador-sia-smart"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 border border-neutral-400 bg-neutral-150 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 transition-colors cursor-pointer text-[10px]"
            title="Ver repositorio de código fuente en GitHub"
          >
            origen.github
          </a>
        </div>
      </div>
    </footer>
  );
}
