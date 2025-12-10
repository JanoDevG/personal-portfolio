"use client";

import ThemeToggle from "../Theme/ThemeToggle";
import LanguageToggle from "../language/LanguageToggle";
import { useEffect, useState } from "react";

const THEME_HINT_KEY = "theme-hint-seen";

const Navbar = () => {
  // Solo necesitamos este estado
  const [showThemeHint, setShowThemeHint] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mostrar popup solo la primera vez
    const themeHintSeen = localStorage.getItem(THEME_HINT_KEY);
    if (!themeHintSeen) {
      setShowThemeHint(true);
      localStorage.setItem(THEME_HINT_KEY, "true");
    }
  }, []);

  return (
    <nav className="bg-primary border-b border-border h-14 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle showHint={showThemeHint} />
      </div>
    </nav>
  );
};

export default Navbar;
