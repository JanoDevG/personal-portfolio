// src/components/Education/EducationSection.tsx
"use client";

import "@/app/globals.css";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  IconChevronDown,
  IconSchool,
  IconCertificate,
  IconBooks,
  IconArrowUpRight,
  IconX,
} from "@tabler/icons-react";

import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/messages";

import { getEducationTexts } from "@/i18n/education";

/* Tailwind utilities */
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @layer utilities {
      .logo-rect { width: 140px; height: auto; }
      .logo-square { height: 75px; width: auto; }
    }
  `;
  document.head.appendChild(style);
}

const LINKEDIN_URL = "https://www.linkedin.com/in/janodevg";

/* ---------- IMAGES ---------- */
import inacapLogo from "@/assets/images/certifications/inacap-logo.png";
import ocpLogo from "@/assets/images/certifications/OCPJSE17.png";
import gcpLogo from "@/assets/images/certifications/gcp-logo.png";
import udemyLogo from "@/assets/images/certifications/Udemy_logo.svg.png";
import usachInsignia from "@/assets/images/certifications/INSIGNIAS2_Mesa-de-trabajo-1-copia-1.png";
import vmwareSpringLogo from "@/assets/images/certifications/VMwareSpringProfessional2022.png";
import azureLogo from "@/assets/images/certifications/azureFundamentalsLogo.png";
import bianLogo from "@/assets/images/certifications/Bian-foundation-badge.svg";

/* ---------- TYPES ---------- */

type EducationKind = "formal" | "cert" | "learning" | "diploma";
type StatusTone = "in-progress" | "upcoming";

type EducationStatus = {
  label: string;
  tone: StatusTone;
};

type EducationStory = {
  kind: EducationKind;
  title: string;
  context: string;
  period?: string;
  summary: string;
  details?: string;
  highlights?: string[];
  logoSrc?: StaticImageData;
  logoAlt?: string;
  status?: EducationStatus;
  credentialUrl?: string;
  isDegree?: boolean;
  logoClassName?: string;
  moreInfoUrl?: string; // link "CONOCER MÁS"
};

/* ---------- CATEGORY CONFIG ---------- */

const getKindConfig = (locale: Locale) => ({
  formal: {
    label: locale === "es" ? "TÍTULO PROFESIONAL" : "PROFESSIONAL DEGREE",
    icon: IconSchool,
    className: "border-accent/40 bg-accent/10 text-accent/90",
  },

  cert: {
    label: locale === "es" ? "CERTIFICACIÓN OFICIAL" : "OFFICIAL CERTIFICATION",
    icon: IconCertificate,
    className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  },

  learning: {
    label: locale === "es" ? "CURSO COMPLEMENTARIO" : "COMPLEMENTARY COURSE",
    icon: IconBooks,
    className: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  },

  diploma: {
    label: locale === "es" ? "DIPLOMADO" : "DIPLOMA PROGRAM",
    icon: IconBooks,
    className: "border-purple-400/40 bg-purple-400/10 text-purple-200",
  },
});

const statusToneConfig: Record<StatusTone, string> = {
  "in-progress": "border-amber-300/70 bg-amber-300/10 text-amber-100",
  upcoming: "border-slate-400/70 bg-slate-400/10 text-slate-200",
};

/* ---------------------------------------------------
   ⭐ TIMELINE ITEM
--------------------------------------------------- */

type EducationTimelineItemProps = {
  story: EducationStory;
  locale: Locale;
  onRequestDegreeVerification: () => void;
  onLogoClick?: (src: StaticImageData, alt: string) => void;
};

const EducationTimelineItem = ({
  story,
  locale,
  onRequestDegreeVerification,
  onLogoClick,
}: EducationTimelineItemProps) => {
  const [open, setOpen] = React.useState(false);

  // Trigger es un <button>, así que el ref debe ser de HTMLButtonElement
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
    }
  }, []);

  const kindConfig = getKindConfig(locale)[story.kind];

  return (
    <div className="relative pl-12 md:pl-14">
      {/* ⭐ ICONO CENTRADO SOBRE LA LÍNEA */}
      <div
        className="absolute left-[12px] -translate-x-1/2"
        style={{ top: headerHeight / 2 - 6 }}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary border border-accent/50">
          <kindConfig.icon className="h-3 w-3 text-accent" />
        </div>
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger ref={ref} className="w-full text-left">
          <div
            className={`
              rounded-xl border border-accent/20 bg-secondary/90 
              px-4 py-3 md:px-5 md:py-4 
              hover:border-accent/60 transition-colors
              ${open ? "shadow-lg shadow-accent/15" : ""}
            `}
          >
            <div className="flex justify-between gap-3">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-primary-content">
                  {story.title}
                </p>
                <p className="text-[11px] text-primary-content/70">
                  {story.context}
                </p>

                {story.period && (
                  <p className="text-[11px] font-mono text-primary-content/60">
                    {story.period}
                  </p>
                )}

                {story.status && (
                  <span
                    className={`mt-1 inline-flex items-center rounded-full border px-2 py-[1px]
                    text-[10px] font-mono uppercase tracking-widest
                    ${statusToneConfig[story.status.tone]}
                    animate-[blink_1.6s_ease-in-out_infinite]`}
                  >
                    {story.status.label}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`
                    inline-flex items-center gap-1 rounded-full border px-2 py-[2px]
                    text-[10px] font-mono uppercase tracking-wide
                    ${kindConfig.className}
                  `}
                >
                  <kindConfig.icon className="h-3 w-3" />
                  {kindConfig.label}
                </span>

                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown className="h-4 w-4 opacity-70" />
                </motion.div>
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        {/* ⭐ CONTENIDO EXPANDIBLE */}
        <AnimatePresence initial={false}>
          {open && (
            <CollapsibleContent forceMount>
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="
                  ml-1 mt-2 rounded-xl border border-white/10 
                  bg-secondary/80 px-4 py-3 md:px-5 md:py-4 
                  text-sm text-primary-content/80
                "
              >
                <div className="md:flex md:items-start md:gap-4">
                  <div className="flex-1">
                    <p>{story.summary}</p>

                    {story.details && (
                      <p className="mt-2 text-[13px]">{story.details}</p>
                    )}

                    {Array.isArray(story.highlights) && story.highlights.length > 0 && (
  <ul className="mt-3 text-[13px] space-y-1.5">
    {story.highlights.map((h) => (
      <li key={h} className="flex gap-2">
        <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent" />
        {h}
      </li>
    ))}
  </ul>
)}

                  </div>

                  {story.logoSrc && (
                    <div className="mt-4 md:mt-0 md:flex md:justify-end md:min-w-[120px]">
                      <button
                        type="button"
                        onClick={() =>
                          onLogoClick?.(
                            story.logoSrc as StaticImageData,
                            story.logoAlt || story.title
                          )
                        }
                        className="group rounded-lg p-1 outline-none focus:ring-2 focus:ring-accent/60"
                      >
                        <Image
                          src={story.logoSrc}
                          alt={story.logoAlt || story.title}
                          className={`
                            object-contain opacity-90 
                            group-hover:opacity-100 group-hover:scale-[1.03] 
                            transition-transform
                            ${story.logoClassName ?? ""}
                          `}
                        />
                      </button>
                    </div>
                  )}
                </div>

                {/* ⭐ BOTONES INFERIORES */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {story.isDegree && (
                    <button
                      onClick={onRequestDegreeVerification}
                      className="rounded-full border border-accent/60 px-3 py-1 text-xs text-accent hover:bg-accent/10"
                    >
                      {locale === "es"
                        ? "Cómo verificar este título"
                        : "How to verify this degree"}
                    </button>
                  )}

                  {story.credentialUrl && (
                    <a
                      href={story.credentialUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1 text-xs text-accent hover:bg-accent/10"
                    >
                      {locale === "es"
                        ? "Verificar certificación"
                        : "Verify certification"}
                      <IconArrowUpRight className="h-3 w-3" />
                    </a>
                  )}

                  {story.moreInfoUrl && (
                    <a
                      href={story.moreInfoUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full border border-secondary px-3 py-1 text-xs text-neutral hover:bg-neutral/10"
                    >
                      {locale === "es" ? "Conocer más" : "Learn more"}
                      <IconArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </div>
  );
};

/* ---------------------------------------------------
   ⭐ MAIN COMPONENT
--------------------------------------------------- */

export const EducationSection = () => {
  const [showDegreeModal, setShowDegreeModal] = React.useState(false);
  const [locale, setLocale] = React.useState<Locale>(DEFAULT_LOCALE);

  const [logoModal, setLogoModal] = React.useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);

  React.useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored) setLocale(stored);

    const handler = (ev: Event) => {
      const next = (ev as CustomEvent<Locale>).detail;
      setLocale(next);
    };

    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const tEdu = getEducationTexts(locale);
  const s = tEdu.stories;

  const stories: EducationStory[] = [
  {
    kind: "formal",
    title: s.formalDegree.title,
    context: s.formalDegree.context,
    period: s.formalDegree.period,
    summary: s.formalDegree.summary,
    details: s.formalDegree.details,
    highlights: s.formalDegree.highlights
      ? [...s.formalDegree.highlights] // 👈 FIX: copia mutable
      : undefined,
    isDegree: true,
    logoSrc: inacapLogo,
    logoAlt: "INACAP",
    logoClassName: "logo-rect",
  },

  {
    kind: "cert",
    title: s.ocp17.title,
    context: s.ocp17.context,
    period: s.ocp17.period,
    summary: s.ocp17.summary,
    highlights: s.ocp17.highlights
      ? [...s.ocp17.highlights] // 👈 FIX
      : undefined,
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD5390904EB94E5FCC800042B9450CF905AC2EE7DD75514ACD498A2622111888",
    logoSrc: ocpLogo,
    logoAlt: "OCP Java 17",
    logoClassName: "logo-square",
  },

  {
    kind: "cert",
    title: s.apigeeSpecialization.title,
    context: s.apigeeSpecialization.context,
    summary: s.apigeeSpecialization.summary,
    highlights: s.apigeeSpecialization.highlights
      ? [...s.apigeeSpecialization.highlights] // 👈 FIX
      : undefined,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6T3U29X29JS",
    logoSrc: gcpLogo,
    logoAlt: "Google Cloud",
    logoClassName: "logo-square",
  },

  {
    kind: "learning",
    title: s.javaMaster.title,
    context: s.javaMaster.context,
    summary: s.javaMaster.summary,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-88f0712d-b71c-4591-bc30-3faa8db68586/",
    logoSrc: udemyLogo,
    logoAlt: "Udemy Java Master",
    logoClassName: "logo-rect",
  },

  {
    kind: "learning",
    title: s.gitflow.title,
    context: s.gitflow.context,
    summary: s.gitflow.summary,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-91746dc2-a8ce-46b1-ba12-08b780fd53cd/",
    logoSrc: udemyLogo,
    logoAlt: "Udemy GitFlow",
    logoClassName: "logo-rect",
  },

  // ⭐ DIPLOMADO
  {
    kind: "diploma",
    title: s.cloudDiploma.title,
    context: s.cloudDiploma.context,
    period: s.cloudDiploma.period,
    summary: s.cloudDiploma.summary,
    status: { label: tEdu.status.inProgress, tone: "in-progress" },
    logoSrc: usachInsignia,
    logoAlt: "USACH",
    logoClassName: "logo-rect",
    moreInfoUrl:
      "https://diplomadociberseguridad.com/new-diplomado-en-arquitectura-y-seguridad-cloud/",
  },

  // ⭐ BIAN
  {
    kind: "cert",
    title: s.bian.title,
    context: s.bian.context,
    summary: s.bian.summary,
    status: { label: tEdu.status.upcoming, tone: "upcoming" },
    logoSrc: bianLogo,
    logoAlt: "BIAN Foundation",
    logoClassName: "logo-square",
    moreInfoUrl: "https://bian-services.com/certifications/",
  },

  // ⭐ SPRING BOOT
  {
    kind: "learning",
    title: s.springPro.title,
    context: s.springPro.context,
    summary: s.springPro.summary,
    status: { label: tEdu.status.upcoming, tone: "upcoming" },
    logoSrc: vmwareSpringLogo,
    logoAlt: "VMware Spring",
    logoClassName: "logo-square",
    moreInfoUrl:
      "https://docs.broadcom.com/doc/vmw-spring-certified-professional",
  },

  // ⭐ AZURE
  {
    kind: "learning",
    title: s.azureFundamentals.title,
    context: s.azureFundamentals.context,
    summary: s.azureFundamentals.summary,
    status: { label: tEdu.status.upcoming, tone: "upcoming" },
    logoSrc: azureLogo,
    logoAlt: "Azure Fundamentals",
    logoClassName: "logo-square",
    moreInfoUrl:
      "https://learn.microsoft.com/es-mx/credentials/certifications/azure-fundamentals/",
  },
];


  return (
    <section id="education" className="my-20">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-content">
          {tEdu.title}
        </h2>
        <p className="mt-3 text-center text-primary-content/80">
          {tEdu.subtitle}
        </p>

        <div className="mt-8 relative">
          {/* Línea vertical animada */}
          <motion.div
            className="absolute left-[12px] top-0 bottom-3 hidden md:block origin-top border-l border-accent/40"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="space-y-5">
            {stories.map((story, i) => (
              <motion.div
                key={story.title + i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <EducationTimelineItem
                  story={story}
                  locale={locale}
                  onRequestDegreeVerification={() => setShowDegreeModal(true)}
                  onLogoClick={(src, alt) => setLogoModal({ src, alt })}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL DE VERIFICACIÓN DE TÍTULO */}
      {showDegreeModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg rounded-xl border border-accent/40 bg-secondary p-6 shadow-xl">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-primary-content">
                {tEdu.modal.title}
              </h3>

              <button
                onClick={() => setShowDegreeModal(false)}
                className="rounded-full border border-accent/40 p-1 text-accent hover:bg-accent/10"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-primary-content/80">
              {tEdu.modal.privacy}
            </p>

            <p className="mt-3 text-primary-content/80">
              {tEdu.modal.contact}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                className="text-accent underline ml-1"
              >
                Ver perfil
              </a>
            </p>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowDegreeModal(false)}
                className="rounded-full border border-accent/60 px-4 py-1.5 text-sm text-accent hover:bg-accent/10"
              >
                {tEdu.modal.understood}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE LOGO AMPLIADO */}
      {logoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          {/* clic en fondo cierra */}
          <button
            type="button"
            onClick={() => setLogoModal(null)}
            className="absolute inset-0 cursor-default"
            aria-label="Cerrar imagen ampliada"
          />

          <div className="relative z-50 max-w-[90vw] max-h-[80vh] rounded-xl bg-secondary/90 border border-accent/40 p-4 shadow-2xl flex flex-col items-end gap-3">
            <button
              onClick={() => setLogoModal(null)}
              className="rounded-full border border-accent/40 p-1 text-accent hover:bg-accent/10"
            >
              <IconX className="h-4 w-4" />
            </button>

            <div className="flex w-full justify-center">
              <Image
                src={logoModal.src}
                alt={logoModal.alt}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationSection;
