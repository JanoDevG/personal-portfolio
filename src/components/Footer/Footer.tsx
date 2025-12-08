"use client";

import { useEffect, useState } from "react";
import Logo from "../Navbar/Logo";
import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

const Footer = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") setLocale(stored);

    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const next = custom.detail;
      if (next === "es" || next === "en") setLocale(next);
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const t = messages[locale].footer;

  return (
    <footer className="bg-secondary relative flex min-h-[420px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14">

      {/* Contenedor superior */}
      <div className="relative z-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">

        {/* Logo + descripción */}
        <div>
          <h5 className="mb-6 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Portafolio</span>
          </h5>

          <h6 className="text-neutral mb-2 font-semibold">{t.techTitle}</h6>

          <p className="text-tertiary-content leading-relaxed text-sm md:text-base">
            {t.techDescription}
          </p>

          <p className="text-tertiary-content mt-4 text-sm md:text-base">
            {t.template}{" "}
            <a
              href="https://github.com/AbdulBasit313/nextjs-portfolio-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline ml-1"
            >
              {t.templateLinkText}
            </a>
          </p>
        </div>

        {/* Ubicación + licencia */}
        <div className="flex flex-col justify-between md:items-end gap-8">
          <div className="text-right">
            <h5 className="text-neutral mb-2 text-lg font-medium">{t.locationTitle}</h5>
            <p className="text-tertiary-content text-sm">{t.locationText}</p>
          </div>

          <div className="text-right">
            <h5 className="text-neutral mb-2 text-lg font-medium">{t.licenseTitle}</h5>
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary-content hover:text-neutral text-sm underline"
            >
              {t.licenseText}
            </a>
          </div>

          <p className="text-tertiary-content text-xs mt-6">
            {t.copy}
          </p>
        </div>
      </div>

      {/* Círculos decorativos */}
      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
