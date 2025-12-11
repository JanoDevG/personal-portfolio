"use client";

import { useState, useEffect } from "react";
import { LayoutTextFlip } from "@/components/ui/LayoutTextFlip";
import { SparklesCore } from "../ui/sparkles";
import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";
import { ExecutiveBentoGrid } from "@/components/Projects/ExecutiveBentoGrid";

interface ProjectSectionProps {
  // ahora es opcional
  locale?: Locale;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ locale }) => {
  // ⭐ Locale interno reactivo
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    locale ?? DEFAULT_LOCALE
  );

  useEffect(() => {
    // cargar desde localStorage
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") {
      setCurrentLocale(stored);
    }

    // escuchar cambios globales de idioma
    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const next = custom.detail;

      if (next === "es" || next === "en") {
        setCurrentLocale(next);
      }
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const t = messages[currentLocale].executive;

  return (
    <section id="projects" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col items-center text-center gap-4 relative pb-10">
          {/* TAG */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-content/60">
            {t.tag}
          </p>

          {/* TÍTULO + TEXTO ANIMADO + SPARKLES */}
          <div className="relative flex flex-col items-center">
            <div className="relative z-[10]">
              <LayoutTextFlip
                locale={currentLocale}
                duration={3000}
                className="relative z-[30]"
              />
            </div>

            <div className="pointer-events-none absolute left-0 right-0 top-[2.1rem] mx-auto flex justify-center z-[20]">
              <div className="relative w-[75%] h-12 overflow-hidden">
                <SparklesCore
                  background="transparent"
                  minSize={1.3}
                  maxSize={3}
                  particleDensity={500}
                  particleColor="#00f2b3"
                  className="h-full w-full"
                />

                <div
                  className="
                    absolute inset-x-0 top-0 h-[2px]
                    bg-gradient-to-r from-transparent 
                    via-accent/80 to-transparent 
                    blur-[2px]
                  "
                />
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN */}
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-content/80 md:text-base z-10">
            {t.description}
          </p>

          {/* BENTO GRID */}
          <div className="w-full mt-10">
            <ExecutiveBentoGrid locale={currentLocale} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
