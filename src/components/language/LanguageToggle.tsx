// src/components/Language/LanguageToggle.tsx
"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

export default function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") {
      setLocale(stored);
    }
  }, []);

  const toggleLocale = () => {
    const next: Locale = locale === "es" ? "en" : "es";
    setLocale(next);

    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      document.cookie = `locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;

      // Avisar al resto de la app
      window.dispatchEvent(
        new CustomEvent("locale-change", { detail: next as Locale }),
      );
    }
  };

  if (!mounted) {
    return <div className="h-8 w-16 rounded-full bg-neutral/30" />;
  }

  const isEs = locale === "es";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="toggle language"
      className="relative inline-flex h-8 w-16 items-center rounded-full border border-border bg-secondary px-1 text-[10px] font-medium uppercase"
    >
      {/* ES */}
      <span
        className={`absolute left-2 transition-colors ${
          isEs ? "text-neutral-900" : "text-neutral-500"
        }`}
      >
        ES
      </span>

      {/* EN */}
      <span
        className={`absolute right-2 transition-colors ${
          isEs ? "text-neutral-500" : "text-neutral-900"
        }`}
      >
        EN
      </span>

      {/* Thumb */}
      <span
        className={`absolute top-1 h-6 w-6 rounded-full border-2 border-neutral-900 bg-primary-content transition-transform duration-200 ${
          isEs ? "translate-x-0" : "translate-x-8"
        }`}
      />
    </button>
  );
}
