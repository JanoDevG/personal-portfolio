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

const THEME_HINT_KEY = "theme-hint-seen";

const Navbar = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // Nuevo: controlar si el hint del tema debe mostrarse
  const [showThemeHint, setShowThemeHint] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Cargar idioma
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") {
      setLocale(stored);
    }

    // Detectar si debe mostrarse el mensaje inicial del tema
    const themeHintSeen = localStorage.getItem(THEME_HINT_KEY);
    if (!themeHintSeen) {
      setShowThemeHint(true); // 👉 Mostrar popup la primera vez
      localStorage.setItem(THEME_HINT_KEY, "true");
    }

    // Listener para cambios de idioma
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

  return (
    <nav className="bg-primary border-b border-border h-14 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
      {/* Izquierda: selector de idioma */}
      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>

      {/* Derecha: selector de tema */}
      <div className="flex items-center gap-4">
        <ThemeToggle showHint={showThemeHint} />
      </div>
    </nav>
  );
};

export default Navbar;
