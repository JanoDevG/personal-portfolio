// src/components/Contact/ContactSection.tsx
"use client";

import { useEffect, useState } from "react";

import { MsgIcon } from "@/utils/icons";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import AnimatedPanel from "./AnimatedPanel";

import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

// 👉 Tus datos reales
const EMAIL = "janodevg@outlook.cl";
const LINKEDIN_URL = "https://www.linkedin.com/in/janodevg";
const GITHUB_URL = "https://github.com/janodevg";

const ContactSection = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // 🔄 Escuchar cambio de idioma exactamente como Hero
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") {
      setLocale(stored);
    }

    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const next = custom.detail;
      if (next === "es" || next === "en") {
        setLocale(next);
      }
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  // 📌 Textos traducidos
  const t = messages[locale].contact;

  return (
    <section
      id="contact"
      className="
        my-8 rounded-4xl bg-secondary p-8
        grid grid-cols-1 gap-12
        md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12
      "
    >
      {/* Columna izquierda */}
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-3xl font-bold text-primary-content">
            {t.title}
          </h3>

          <h4 className="text-2xl font-bold text-accent md:text-3xl">
            {t.subtitle}
          </h4>

          <p className="mt-6 text-sm md:text-base text-primary-content/75 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="space-y-4">
          {/* CTA principal */}
          <a
            href={`mailto:${EMAIL}`}
            className="
              inline-flex items-center gap-2 rounded-full border border-accent/60
              bg-secondary/60 px-4 py-2 text-sm font-medium text-accent
              hover:bg-accent/10 transition-colors duration-200
            "
          >
            <MsgIcon />
            <span>{t.cta} {EMAIL}</span>
          </a>

          {/* Redes */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary-content/80">
              {t.socialTitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-content/80 hover:text-accent transition-colors"
              >
                <IconBrandLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-primary-content/40">•</span>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-content/80 hover:text-accent transition-colors"
              >
                <IconBrandGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            <p className="text-xs text-primary-content/55">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Columna derecha: animación */}
      <div className="hidden md:block">
        <AnimatedPanel />
      </div>
    </section>
  );
};

export default ContactSection;
