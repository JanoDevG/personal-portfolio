// src/components/Hero/Hero.tsx
"use client";

import { useEffect, useState } from "react";

import useRoleSwitcher from "@/hooks/useRoleSwitcher";
import ChileFlag from "../UI/ChileFlag";
import VortexBackground from "../UI/VortexBackground";
import HeroAnimation from "./HeroAnimation";

import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

const Hero = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") {
      setLocale(stored);
    }

    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const nextLocale = custom.detail;
      if (nextLocale === "es" || nextLocale === "en") {
        setLocale(nextLocale);
      }
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const t = messages[locale].hero;
  const currentRole = useRoleSwitcher({ roles: t.roles, interval: 4000 });
  const isReactiveRole =
    currentRole.toLowerCase().includes("reactiv") ||
    currentRole.toLowerCase().includes("webflux");

  return (
    <section className="bg-primary">
      <VortexBackground
        backgroundColor="transparent"
        containerClassName="
          bg-primary
          min-h-[70vh]
          md:min-h-[72vh]
          lg:min-h-[75vh]
        "
        className="
          mx-auto grid max-w-[1200px] grid-cols-1 items-center
          gap-8 px-4 pt-16 pb-12
          md:grid-cols-2 md:gap-10
          lg:pt-20 lg:pb-14 lg:gap-16
        "
      >
        {/* Columna izquierda */}
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          {/* Título + bandera */}
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-neutral">
              <span className="mb-2 block text-3xl font-bold">
                {`${t.greeting} ${t.name}`}
              </span>
            </h1>

            <a
              href="https://www.gob.cl/nuestro-pais/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.chileAria}
              className="flex items-center"
            >
              <ChileFlag size={32} />
            </a>
          </div>

          {/* Rol dinámico */}
          <div className="mt-3 flex h-[3.5rem] items-center">
            <p
              className={`text-[1.75rem] font-bold leading-tight ${
                isReactiveRole ? "text-[#22c55e]" : "text-accent"
              }`}
            >
              {currentRole}
            </p>
          </div>

          {/* Subtítulo */}
          <h2 className="mt-7 text-base text-neutral md:text-lg">
            {t.subtitle}
          </h2>

          {/* Botones */}
          <div
            className="
              mt-8 flex flex-wrap items-center
              gap-3 md:gap-4 lg:gap-6
            "
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/janodevg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.buttons.linkedinAria}
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-full border border-accent/60 bg-primary/40
                text-accent transition-colors
                hover:bg-accent hover:text-[#00071E]
              "
              style={{ aspectRatio: "1 / 1" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16.4c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03V24h-5V8z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* CV */}
            <a
              href="#cv"
              aria-label={t.buttons.cvAria}
              className="
                whitespace-nowrap rounded-lg bg-accent
                px-4 py-2 text-center text-xs font-medium
                text-[#00071E] transition-colors
                hover:bg-accent/90
                sm:px-5 sm:py-2.5 sm:text-sm
              "
            >
              {t.buttons.cv}
            </a>

            {/* Proyectos */}
            <a
              href="#projects"
              aria-label={t.buttons.projectsAria}
              className="
                whitespace-nowrap rounded-lg bg-secondary
                px-4 py-2 text-center text-xs font-medium
                text-neutral transition-colors
                hover:bg-secondary/80
                sm:px-5 sm:py-2.5 sm:text-sm
              "
            >
              {t.buttons.projects}
            </a>

            {/* Contacto */}
            <a
              href="#contact"
              aria-label={t.buttons.contactAria}
              className="
                whitespace-nowrap rounded-lg border border-accent/60
                px-4 py-2 text-center text-xs font-medium
                text-accent transition-colors
                hover:bg-accent hover:text-[#00071E]
                sm:px-5 sm:py-2.5 sm:text-sm
              "
            >
              {t.buttons.contact}
            </a>
          </div>
        </div>

        {/* Columna derecha – animación Lottie */}
        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <HeroAnimation className="w-full md:max-w-[25rem] lg:max-w-[28rem]" />
        </div>
      </VortexBackground>
    </section>
  );
};

export default Hero;
