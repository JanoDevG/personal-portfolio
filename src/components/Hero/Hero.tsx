"use client";

import { useEffect, useState } from "react";
import useRoleSwitcher from "@/hooks/useRoleSwitcher";
import ChileFlag from "../ui/ChileFlag";
import VortexBackground from "../ui/VortexBackground";
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
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") setLocale(stored);

    const handler = (e: Event) => {
      const next = (e as CustomEvent<Locale>).detail;
      if (next === "es" || next === "en") setLocale(next);
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const t = messages[locale].hero;
  const currentRole = useRoleSwitcher({ roles: t.roles, intervalMs: 4000 });
  const isReactiveRole =
    currentRole.toLowerCase().includes("reactiv") ||
    currentRole.toLowerCase().includes("webflux");

  return (
    <section
      className="
        relative w-full
        bg-primary
        overflow-visible              /* 👈 FIX IMPORTANTE */
        min-h-[100svh]               /* 👈 MEJOR QUE 100vh EN MÓVIL */
      "
    >
      <VortexBackground
        backgroundColor="transparent"
        containerClassName="
          relative w-full
          min-h-[100svh]             /* 👈 YA NO FORZAMOS h-[100vh] */
          flex items-center
        "
        className="
          mx-auto max-w-[1200px]
          grid grid-cols-1 md:grid-cols-2
          items-center
          gap-10 px-4
          pt-24 pb-24                /* 👈 MÁS ESPACIO PARA BOTONES EN MÓVIL */
        "
      >
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col gap-4 lg:max-w-[34rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-neutral text-3xl font-bold">
              {t.greeting} <br /> {t.name}
            </h1>
            <ChileFlag size={32} />
          </div>

          <p
            className={`text-[1.9rem] font-bold ${
              isReactiveRole ? "text-[#22c55e]" : "text-accent"
            }`}
          >
            {currentRole}
          </p>

          <h2 className="text-neutral md:text-lg">{t.subtitle}</h2>

          {/* BOTONES */}
          <div
            className="
              mt-6
              flex flex-nowrap items-center gap-4
              min-w-0
              overflow-x-auto md:overflow-visible
              pr-2
            "
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/janodevg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.buttons.linkedinAria}
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-full border border-accent/60 bg-primary/40
                text-accent hover:bg-accent hover:text-[#00071E]
                transition-colors
              "
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16.4c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03V24h-5V8z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* CV */}
            <a
              href="https://1drv.ms/b/c/25a5971b915f7c02/IQCDFiUzkOC0Tp6DcusqpGM0AftJFDKwMHTMcu4ioVvEuiE?e=tZ6B8X"
              target="_blank"
              rel="noopener noreferrer"
              className="
                whitespace-nowrap rounded-lg bg-accent
                px-5 py-2.5 leading-none
                text-sm font-medium text-[#00071E]
                hover:bg-accent/90 transition-colors
              "
            >
              {t.buttons.cv}
            </a>

            {/* Projects */}
            <a
              href="#success-stories"
              className="
                whitespace-nowrap rounded-lg bg-secondary
                px-5 py-2.5 leading-none
                text-sm font-medium text-neutral
                hover:bg-secondary/80 transition-colors
              "
            >
              {t.buttons.projects}
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                whitespace-nowrap rounded-lg border border-accent/60
                px-5 py-2.5 leading-none
                text-sm font-medium text-accent
                hover:bg-accent hover:text-[#00071E]
                transition-colors
              "
            >
              {t.buttons.contact}
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex justify-center items-center min-h-[20rem] lg:min-h-[30rem]">
          <HeroAnimation className="w-full md:max-w-[25rem] lg:max-w-[28rem]" />
        </div>
      </VortexBackground>
    </section>
  );
};

export default Hero;
