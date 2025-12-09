// src/components/Navbar/Navbar.tsx
"use client";

import ThemeToggle from "../Theme/ThemeToggle";
import LanguageToggle from "../language/LanguageToggle";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // Sincronizar cambios de idioma desde LanguageToggle
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
    return () => {
      window.removeEventListener("locale-change", handler);
    };
  }, []);

  return (
    <nav className="bg-primary border-b border-border h-14 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
      {/* Izquierda: selector de idioma */}
      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>

      {/* Derecha: Theme toggle */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
