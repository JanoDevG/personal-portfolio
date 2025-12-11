"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

interface LayoutTextFlipProps {
  locale?: Locale;
  duration?: number;
  className?: string;
}

export const LayoutTextFlip: React.FC<LayoutTextFlipProps> = ({
  locale,
  duration = 3000,
  className = "",
}) => {
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    locale ?? DEFAULT_LOCALE
  );

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") setCurrentLocale(stored);

    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const next = custom.detail;
      if (next === "es" || next === "en") setCurrentLocale(next);
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const tExec = messages[currentLocale].executive;
  const text = tExec.title;
  const words = tExec.words;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length, currentLocale]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 text-center ${className}`}
    >
      {/* Texto fijo */}
      <motion.span
        layoutId="subtext"
        className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl text-primary-content"
      >
        {text}
      </motion.span>

      {/* Texto rotante – FIX SAFARI */}
      <motion.span
        layout
        className="
          relative w-fit overflow-hidden rounded-md 
          px-4 py-2 font-sans text-2xl font-bold tracking-tight 
          border border-accent/40
          text-accent
          md:text-3xl lg:text-4xl
        "
        style={{
          backgroundColor: "transparent",
          WebkitBackdropFilter: "none",
          backdropFilter: "none",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitMaskImage: "none",
          maskImage: "none",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex + currentLocale}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
