'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import useRoleSwitcher from '@/hooks/useRoleSwitcher';
import useRotatingAnimation from '@/hooks/useRotatingAnimation';
import Ellipse from './Ellipse';
import { HeroImage } from '../../utils/images';

import {
  messages,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from '@/i18n/messages';

const Hero = () => {
  const ellipseRef = useRotatingAnimation();

  // -------- i18n: leer locale actual --------
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === 'es' || stored === 'en') {
      setLocale(stored);
    }

    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      const nextLocale = custom.detail;
      if (nextLocale === 'es' || nextLocale === 'en') {
        setLocale(nextLocale);
      }
    };

    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = messages[locale].hero;

  // -------- texto dinámico de roles (4s) --------
  const currentRole = useRoleSwitcher({
    roles: t.roles,
    interval: 4000,
  });

  const isReactiveRole =
    currentRole.toLowerCase().includes('reactiv') ||
    currentRole.toLowerCase().includes('webflux');

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(100vh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        {/* Columna izquierda: texto */}
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          {/* Título + bandera */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-neutral">
              <span className="mb-2 block text-3xl font-bold">
                {locale === 'es' ? `${t.greeting} ${t.name}` : `${t.greeting} ${t.name}`}
              </span>
            </h1>

            {/* Bandera Chile */}
            <a
              href="https://www.gob.cl/nuestro-pais/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.chileAria}
              className="mt-1 inline-flex items-center justify-center"
            >
              <span className="inline-flex h-9 w-14 items-center justify-center rounded-xl bg-transparent">
                {/* SVG bandera sin borde exterior para que se funda con el fondo */}
                <svg
                  viewBox="0 0 3 2"
                  className="h-full w-full rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.35)]"
                >
                  {/* fondo blanco */}
                  <rect width="3" height="2" fill="#ffffff" />
                  {/* franja azul */}
                  <rect width="1" height="1" fill="#0039A6" />
                  {/* franja roja */}
                  <rect y="1" width="3" height="1" fill="#D52B1E" />
                  {/* estrella */}
                  <polygon
                    points="0.5,0.18 0.56,0.36 0.75,0.36 0.60,0.47 0.66,0.65 0.5,0.54 0.34,0.65 0.40,0.47 0.25,0.36 0.44,0.36"
                    fill="#ffffff"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Rol dinámico con altura fija para evitar saltos entre idiomas */}
          <div className="mt-3 h-[3.5rem] flex items-center">
            <p
              className={`text-[1.75rem] font-bold leading-tight ${
                isReactiveRole ? 'text-[#22c55e]' : 'text-accent'
              }`}
            >
              {currentRole}
            </p>
          </div>

          {/* Subtítulo */}
          <h2 className="text-neutral mt-4 text-base md:text-lg">
            {t.subtitle}
          </h2>

          {/* Botones acción */}
          <div className="mt-8 flex flex-wrap gap-4 md:gap-6">
            {/* 1. LinkedIn (solo logo, mismo alto) */}
            <a
              href="https://www.linkedin.com/in/janodevg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.buttons.linkedinAria}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-primary/40 text-accent transition-colors hover:bg-accent hover:text-[#00071E]"
            >
              {/* Logo LinkedIn SVG */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16.4c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03V24h-5V8z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* 2. CV */}
            <a
              href="#cv"
              aria-label={t.buttons.cvAria}
              className="bg-accent min-w-[170px] rounded-lg px-5 py-2.5 text-center text-sm font-medium text-[#00071E] transition-colors hover:bg-accent/90"
            >
              {t.buttons.cv}
            </a>
            {/* 3. Proyectos */}
            <a
              href="#projects"
              aria-label={t.buttons.projectsAria}
              className="bg-secondary min-w-[210px] rounded-lg px-5 py-2.5 text-center text-sm font-medium text-neutral transition-colors hover:bg-secondary/80"
            >
              {t.buttons.projects}
            </a>

            {/* 4. Contacto */}
            <a
              href="#contact"
              aria-label={t.buttons.contactAria}
              className="border border-accent/60 min-w-[160px] rounded-lg px-5 py-2.5 text-center text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-[#00071E]"
            >
              {t.buttons.contact}
            </a>
          </div>
        </div>

        {/* Columna derecha: ilustración */}
        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="relative size-56 text-accent sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill
              priority
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt={t.imageAlt}
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute left-0 top-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
