// src/components/SuccessStories/SuccessStoriesSection.tsx
"use client";

import { useEffect, useState } from "react";

import { SuccessStoryCard } from "./SuccessStoryCard";
import {
  IconTopologyStar3,
  IconBuildingBank,
  IconShare3, // lo dejo aunque no se use, tal como estaba
  IconInfoCircle,
  IconTruck,
  IconArrowsExchange,
} from "@tabler/icons-react";

import {
  successStoriesTexts,
  resolveSuccessStoriesLocale,
} from "@/i18n/successStories";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

export const SuccessStoriesSection = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    // leer idioma almacenado
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "es" || stored === "en") setLocale(stored);

    // suscribirse al evento global "locale-change"
    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const next = custom.detail;
      if (next === "es" || next === "en") setLocale(next);
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const key = resolveSuccessStoriesLocale(locale);
  const localeBlock = successStoriesTexts[key];

  const section = localeBlock.section;
  const stories = localeBlock.successStories;

  const icons = [
    <IconTopologyStar3 className="h-5 w-5 text-accent" />,
    <IconBuildingBank className="h-5 w-5 text-accent" />,
    <IconTruck className="h-5 w-5 text-accent" />,
    <IconArrowsExchange className="h-5 w-5 text-accent" />,
  ];

  return (
    <section id="success-stories" className="my-20">
      {/* CONTENEDOR AJUSTADO A 1100px */}
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Título centrado */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-content mb-6">
          {section.title}
        </h2>

        {/* Caja informativa */}
        <div
          className="
            mb-10 flex items-start gap-3 rounded-xl 
            border border-accent/30 bg-secondary/70 
            p-4 text-primary-content/80
          "
        >
          <IconInfoCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />

          <p className="text-sm leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* LISTA DE TARJETAS */}
        <div className="flex flex-col gap-5 w-full">
          {stories.map((story, i) => (
            <SuccessStoryCard
              key={i}
              locale={locale}
              icon={icons[i] ?? icons[0]}
              featured={i === 0}
              {...story}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
