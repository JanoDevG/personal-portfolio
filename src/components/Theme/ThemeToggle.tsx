"use client";

import { useEffect, useState } from "react";
import {
  messages,
  type Locale,
  LOCALE_STORAGE_KEY,
  DEFAULT_LOCALE,
} from "@/i18n/messages";

// ------------------ Tema ------------------
const ALLOWED_THEMES = ["dark", "light"] as const;
type Theme = (typeof ALLOWED_THEMES)[number];

// ------------------ Helpers idioma ------------------
function getCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(/(?:^|; )locale=(es|en)(?:;|$)/);

  if (!match) return null;
  return match[1] as Locale;
}

// ------------------ Detectar si es móvil ------------------
function isMobile() {
  if (typeof window === "undefined") return false;

  return window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
}

const SunIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M20 14.5A7.5 7.5 0 0 1 10.5 5 6 6 0 1 0 20 14.5z"
      fill="currentColor"
    />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // ----------------------------------------------------
  // Inicialización: tema + idioma (ES por defecto)
  // ----------------------------------------------------
  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const mobile = isMobile();

    // ----------- Tema -----------
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const hintSeen = localStorage.getItem("theme_hint_seen") === "true";

    if (storedTheme && ALLOWED_THEMES.includes(storedTheme)) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);

      // En móviles -> jamás mostrar hint
      if (!mobile) setShowHint(false);
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");

      // En móviles -> NO mostrar hint nunca
      if (!mobile && !hintSeen) {
        setShowHint(true);
      }
    }

    // ----------- Idioma -----------
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as
      | Locale
      | null;

    const cookieLocale = getCookieLocale();

    let initialLocale: Locale = DEFAULT_LOCALE; // ---- Español por defecto ----

    if (storedLocale && (storedLocale === "es" || storedLocale === "en")) {
      initialLocale = storedLocale;
    } else if (cookieLocale && (cookieLocale === "es" || cookieLocale === "en")) {
      initialLocale = cookieLocale;
    }

    setLocale(initialLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, initialLocale);
  }, []);

  // Sincronizar cambios de tema
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Cerrar hint con ESC
  useEffect(() => {
    if (!showHint) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowHint(false);
        localStorage.setItem("theme_hint_seen", "true");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showHint]);

  if (!mounted) {
    return <div className="h-8 w-16 rounded-full bg-neutral/30" />;
  }

  const isDark = theme === "dark";
  const mobile = isMobile();
  const hint = messages[locale].themeHint;

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");

    if (showHint) {
      setShowHint(false);
      localStorage.setItem("theme_hint_seen", "true");
    }
  };

  const markHintSeenAndClose = () => {
    setShowHint(false);
    localStorage.setItem("theme_hint_seen", "true");
  };

  return (
    <div className="relative">
      {/* Overlay oscuro (solo desktop) */}
      {!mobile && showHint && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
          onClick={markHintSeenAndClose}
        />
      )}

      {/* Toggle */}
      <button
        type="button"
        onClick={handleToggleTheme}
        aria-label="toggle theme"
        className={`relative inline-flex h-8 w-16 items-center rounded-full border border-border px-1 transition-colors duration-200 ${
          isDark ? "bg-primary" : "bg-secondary"
        }`}
      >
        <SunIcon
          className={`absolute left-2 h-4 w-4 transition-colors ${
            isDark ? "text-neutral-400" : "text-neutral-900"
          }`}
        />
        <MoonIcon
          className={`absolute right-2 h-4 w-4 transition-colors ${
            isDark ? "text-neutral-50" : "text-neutral-500"
          }`}
        />

        <span
          className={`absolute top-1 h-6 w-6 rounded-full border-2 transition-transform duration-200
            ${isDark ? "border-neutral-50 translate-x-8" : "border-neutral-900 translate-x-0"}
          `}
        />
      </button>

      {/* Hint flotante (solo desktop) */}
      {!mobile && showHint && (
        <div className="animate-fade-in fixed right-4 top-20 z-50 w-[260px] rounded-xl border border-border bg-secondary p-4 text-sm text-primary-content shadow-xl md:right-8 md:top-20">
          <p className="mb-2">{hint.text}</p>
          <button
            type="button"
            onClick={markHintSeenAndClose}
            className="mt-1 text-xs text-neutral-500 hover:text-neutral-300 underline"
          >
            {hint.button}
          </button>
        </div>
      )}
    </div>
  );
}
