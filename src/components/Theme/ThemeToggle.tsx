"use client";

import { useEffect, useState } from "react";

const ALLOWED_THEMES = ["dark", "light"] as const;
type Theme = (typeof ALLOWED_THEMES)[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Cargar tema inicial desde localStorage o fallback a "dark"
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

  // Guardar cambios de tema y actualizar data-theme
  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    // Placeholder mientras monta (evita parpadeos)
    return <div className="h-8 w-14 rounded-full bg-neutral/50" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="relative inline-flex h-8 w-16 items-center rounded-full border border-border bg-neutral px-1 transition-colors"
    >
      {/* Sol izquierda */}
      <span className="pointer-events-none absolute left-1 text-xs">
        ☀️
      </span>
      {/* Luna derecha */}
      <span className="pointer-events-none absolute right-1 text-xs">
        🌙
      </span>

      {/* “Thumb” deslizante */}
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-primary-content shadow-md transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
