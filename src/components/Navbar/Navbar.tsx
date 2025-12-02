// src/components/Navbar/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BurgerIcon, CloseIcon } from "../../utils/icons";
import ThemeToggle from "../Theme/ThemeToggle";
import LanguageToggle from "../language/LanguageToggle";
import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const pathname = usePathname();

  // Cargar idioma inicial + escuchar cambios desde LanguageToggle
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

  const t = messages[locale].navbar;

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.cv, href: "/cv" },
    { label: t.about, href: "/#about" },
    { label: t.projects, href: "/#projects" },
    { label: t.career, href: "/#career" },
    { label: t.education, href: "/#education" },
    { label: t.contact, href: "/#contact" },
  ];

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/cv") return pathname === "/cv";
    if (href.startsWith("/#")) return pathname === "/";
    return false;
  };

  return (
    <nav className="bg-primary border-border h-16 border-b sticky top-0 z-40">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center gap-4 px-4 md:px-8 py-1">
        {/* Izquierda: selector de idioma */}
        <div className="flex items-center gap-4 pl-1 md:pl-2 md:w-[120px]">
          <LanguageToggle />

          {/* Texto "menú" solo en mobile cuando el menú está abierto */}
          {isVisible && (
            <span className="text-primary-content text-sm md:hidden">
              {t.menu}
            </span>
          )}
        </div>

        {/* Centro: menú + theme (solo mobile) */}
        <ul
          className={`${
            isVisible ? "flex" : "hidden"
          } animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-screen flex-col 
             md:static md:top-0 md:flex md:h-full md:w-auto md:flex-1 md:flex-row`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="
                border-border flex items-center border-b px-4 text-2xl
                md:border-y-0 md:border-e md:text-sm md:first:border-s md:last:border-none
                lg:px-8
                md:flex-1
              "
            >
              <Link
                href={href}
                className={`
                  text-primary-content hover:text-neutral
                  w-full py-7 md:py-0
                  transition-all duration-150
                  text-center leading-snug
                  ${isActive(href) ? "text-neutral cursor-text" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* ThemeToggle dentro del menú SOLO en mobile */}
          <li className="border-border flex items-center border-b px-4 text-2xl md:hidden">
            <div className="w-full py-4 flex justify-center">
              <ThemeToggle />
            </div>
          </li>
        </ul>

        {/* Botón mobile (burger / close) */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} aria-label="toggle navigation menu">
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        {/* Derecha: ThemeToggle SOLO desktop */}
        <div className="hidden md:flex items-center justify-end w-[120px]">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
