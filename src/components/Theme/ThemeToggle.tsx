"use client";

import { useEffect, useState } from "react";

const ALLOWED_THEMES = ["dark", "light"] as const;
type Theme = (typeof ALLOWED_THEMES)[number];

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

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored && ALLOWED_THEMES.includes(stored)) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return <div className="h-8 w-16 rounded-full bg-neutral/30" />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="toggle theme"
      className={`relative inline-flex h-8 w-16 items-center rounded-full border border-border px-1 transition-colors duration-200 ${
        isDark ? "bg-primary" : "bg-secondary"
      }`}
    >
      {/* Sol (izquierda) */}
      <SunIcon
        className={`absolute left-2 h-4 w-4 transition-colors ${
          isDark ? "text-neutral-400" : "text-neutral-900"
        }`}
      />

      {/* Luna (derecha) */}
      <MoonIcon
        className={`absolute right-2 h-4 w-4 transition-colors ${
          isDark ? "text-neutral-50" : "text-neutral-500"
        }`}
      />

      {/* Thumb hueco */}
      <span
        className={`
          absolute top-1 h-6 w-6 rounded-full border-2 transition-transform duration-200
          ${isDark ? "border-neutral-50" : "border-neutral-900"}
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      />
    </button>
  );
}
