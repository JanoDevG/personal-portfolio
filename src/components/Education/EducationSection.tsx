// src/components/Education/EducationSection.tsx
"use client";

/* 🔥 UTILIDADES PARA TAMAÑOS DE LOGOS – EDITA AQUÍ CUANDO QUIERAS */
import "@/app/globals.css"; // Asegura que Tailwind procese layers, si ya cargas esto ignóralo.

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

/* ⭐️ TAILWIND UTILITIES DEFINIDAS DENTRO DEL COMPONENTE */
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @layer utilities {
      .logo-rect {
        width: 140px;
        height: auto;
      }
      .logo-square {
        height: 75px;
        width: auto;
      }
    }
  `;
  document.head.appendChild(style);
}

/* 🔗 LINKEDIN REAL */
const LINKEDIN_URL =
  "https://www.linkedin.com/in/TU-USUARIO-AQUI";

/* 🖼️ IMPORTACIÓN DE LOGOS */
import inacapLogo from "@/assets/images/certifications/inacap-logo.png";
import ocpLogo from "@/assets/images/certifications/OCPJSE17.png";
import gcpLogo from "@/assets/images/certifications/gcp-logo.png";
import udemyLogo from "@/assets/images/certifications/Udemy_logo.svg.png";
import usachInsignia from "@/assets/images/certifications/INSIGNIAS2_Mesa-de-trabajo-1-copia-1.png";
import vmwareSpringLogo from "@/assets/images/certifications/VMwareSpringProfessional2022.png";
import azureLogo from "@/assets/images/certifications/azureFundamentalsLogo.png";
import bianLogo from "@/assets/images/certifications/Bian-foundation-badge.svg";

type EducationKind = "formal" | "cert" | "learning";
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
};

/* CONFIGURACIONES */
const kindConfig: Record<
  EducationKind,
  { label: string; icon: React.ComponentType<any>; className: string }
> = {
  formal: {
    label: "Educación formal",
    icon: IconSchool,
    className: "border-accent/40 bg-accent/10 text-accent/90",
  },
  cert: {
    label: "Certificación",
    icon: IconCertificate,
    className:
      "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  },
  learning: {
    label: "Formación continua",
    icon: IconBooks,
    className: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  },
};

const statusToneConfig: Record<StatusTone, string> = {
  "in-progress":
    "border-amber-300/70 bg-amber-300/10 text-amber-100",
  upcoming:
    "border-slate-400/70 bg-slate-400/10 text-slate-200",
};

/* 🔥 LISTA COMPLETA DE HISTORIAS */
const stories: EducationStory[] = [
  {
    kind: "formal",
    title: "Ingeniería en Informática",
    context: "Título profesional · Universidad Tecnológica de Chile INACAP",
    period: "Carrera finalizada",
    summary:
      "Formación en ingeniería de software, bases de datos, arquitectura de sistemas y desarrollo de aplicaciones empresariales.",
    details:
      "Este ciclo formal me dio la base sólida en programación, estructuras de datos, diseño de bases de datos, redes y fundamentos de arquitectura de software.",
    highlights: [
      "Enfoque en ingeniería de software.",
      "Modelado de datos y desarrollo empresarial.",
      "Fundamentos aplicables a proyectos reales.",
    ],
    isDegree: true,
    logoSrc: inacapLogo,
    logoAlt: "INACAP",
    logoClassName: "logo-rect",
  },
  {
    kind: "cert",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    context: "Certificación oficial · Oracle",
    period: "Issued Jun 2025",
    summary: "Certificación que valida dominio avanzado del lenguaje Java SE 17.",
    highlights: [
      "APIs modernas de Java.",
      "Concurrencia, Streams, Lambdas.",
      "Buenas prácticas de diseño.",
    ],
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD5390904EB94E5FCC800042B9450CF905AC2EE7DD75514ACD498A2622111888",
    logoSrc: ocpLogo,
    logoAlt: "OCP Java 17",
    logoClassName: "logo-square",
  },
  {
    kind: "cert",
    title:
      "Programa Especializado – Developing APIs with Google Cloud's Apigee API Platform",
    context: "Coursera · Google Cloud",
    summary: "Especialización en diseño y operación de APIs APIGEE.",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6T3U29X29JS",
    logoSrc: gcpLogo,
    logoAlt: "Google Cloud",
    logoClassName: "logo-square",
  },
  {
    kind: "learning",
    title: "Máster Completo en Java (+180 hrs)",
    context: "Udemy",
    summary: "Intensivo para dominar Java moderno.",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-88f0712d-b71c-4591-bc30-3faa8db68586/",
    logoSrc: udemyLogo,
    logoAlt: "Udemy Java Master",
    logoClassName: "logo-rect",
  },
  {
    kind: "learning",
    title: "Curso GitFlow en GitLab / GitHub",
    context: "Udemy",
    summary: "Práctica profesional de GitFlow para equipos.",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-91746dc2-a8ce-46b1-ba12-08b780fd53cd/",
    logoSrc: udemyLogo,
    logoAlt: "Udemy GitFlow",
    logoClassName: "logo-rect",
  },
  /* 🔥 Próximos pasos */
  {
    kind: "learning",
    title: "Diplomado en Arquitectura y Seguridad Cloud",
    context: "USACH",
    period: "En formación",
    summary:
      "Diseño de arquitecturas cloud seguras y escalables.",
    status: { label: "EN FORMACIÓN", tone: "in-progress" },
    logoSrc: usachInsignia,
    logoAlt: "USACH",
    logoClassName: "logo-rect",
  },
  {
    kind: "cert",
    title: "BIAN Foundation Certification",
    context: "BIAN",
    summary:
      "Estándar global para arquitecturas bancarias basadas en servicios.",
    status: { label: "PRÓXIMAMENTE", tone: "upcoming" },
    logoSrc: bianLogo,
    logoAlt: "BIAN Foundation",
    logoClassName: "logo-square",
  },
  {
    kind: "learning",
    title: "Spring Professional Certification",
    context: "VMware",
    summary: "Certificación oficial sobre el ecosistema Spring.",
    status: { label: "PRÓXIMAMENTE", tone: "upcoming" },
    logoSrc: vmwareSpringLogo,
    logoAlt: "VMware Spring",
    logoClassName: "logo-square",
  },
  {
    kind: "learning",
    title: "Microsoft Azure Fundamentals",
    context: "Microsoft",
    summary: "Fundamentos esenciales de Azure Cloud.",
    status: { label: "PRÓXIMAMENTE", tone: "upcoming" },
    logoSrc: azureLogo,
    logoAlt: "Azure Fundamentals",
    logoClassName: "logo-square",
  },
];

/* COMPONENTE TIMELINE */
const EducationTimelineItem: React.FC<{
  story: EducationStory;
  index: number;
  onRequestDegreeVerification: () => void;
}> = ({ story, index, onRequestDegreeVerification }) => {
  const [open, setOpen] = React.useState(index === 0);
  const cfg = kindConfig[story.kind];
  const KindIcon = cfg.icon;

  return (
    <div className="relative pl-10 md:pl-12">
      {/* Punto timeline */}
      <div className="absolute left-[12px] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary border border-accent/50">
          <KindIcon className="h-3 w-3 text-accent" />
        </div>
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="w-full text-left">
          <div className="rounded-xl border border-accent/20 bg-secondary/90 px-4 py-3 md:px-5 md:py-4 transition-colors hover:border-accent/60">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-primary-content">
                  {story.title}
                </p>
                <p className="text-[11px] text-primary-content/70">{story.context}</p>
                {story.period && (
                  <p className="text-[11px] font-mono text-primary-content/55">
                    {story.period}
                  </p>
                )}
                {story.status && (
                  <span
                    className={`
                      mt-1 inline-flex items-center rounded-full border px-2 py-[1px]
                      text-[10px] font-mono uppercase tracking-[0.16em]
                      ${statusToneConfig[story.status.tone]}
                      animate-[blink_1.6s_ease-in-out_infinite]
                    `}
                  >
                    {story.status.label}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-[2px] text-[10px] font-mono uppercase tracking-wide ${cfg.className}`}
                >
                  <cfg.icon className="h-3 w-3" />
                  <span>{cfg.label}</span>
                </span>

                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown className="h-4 w-4 text-primary-content/65" />
                </motion.div>
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        <AnimatePresence initial={false}>
          {open && (
            <CollapsibleContent forceMount>
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-1 mt-2 rounded-xl border border-primary-content/10 bg-secondary/80 px-4 py-3 md:px-5 md:py-4 text-sm text-primary-content/80"
              >
                <p>{story.summary}</p>

                {story.details && (
                  <p className="mt-2 text-[13px] leading-snug">{story.details}</p>
                )}

                {/* Highlights */}
                {story.highlights && (
                  <div className="mt-3">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent/80">
                      Aspectos destacados
                    </p>
                    <ul className="mt-1 space-y-1.5 text-[13px] leading-snug">
                      {story.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Logo */}
                {story.logoSrc && (
                  <div className="mt-4 flex justify-end">
                    <Image
                      src={story.logoSrc}
                      alt={story.logoAlt || story.title}
                      className={`object-contain opacity-90 ${story.logoClassName}`}
                    />
                  </div>
                )}

                {/* Botón verificación */}
                {(story.isDegree || story.credentialUrl) && (
                  <div className="mt-4">
                    {story.isDegree ? (
                      <button
                        onClick={onRequestDegreeVerification}
                        className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1 text-xs text-accent hover:bg-accent/10"
                      >
                        Cómo verificar este título
                      </button>
                    ) : (
                      <a
                        href={story.credentialUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1 text-xs text-accent hover:bg-accent/10"
                      >
                        Verificar certificación
                        <IconArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </div>
  );
};

/* COMPONENTE PRINCIPAL */
export const EducationSection: React.FC = () => {
  const [showDegreeModal, setShowDegreeModal] = React.useState(false);

  return (
    <section id="education" className="my-20">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-content">
          Educación, certificaciones y formación continua
        </h2>
        <p className="mt-3 text-center text-sm md:text-base text-primary-content/75">
          Una vista rápida de mi formación profesional y técnica.
        </p>

        <div className="mt-8 relative">
          <div className="absolute left-[12px] top-0 bottom-3 hidden md:block border-l border-accent/30" />

          <div className="space-y-5">
            {stories.map((story, i) => (
              <EducationTimelineItem
                key={story.title + i}
                story={story}
                index={i}
                onRequestDegreeVerification={() => setShowDegreeModal(true)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDegreeModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg rounded-xl border border-accent/40 bg-secondary p-6 shadow-xl">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-primary-content">
                Verificación de título profesional
              </h3>
              <button
                onClick={() => setShowDegreeModal(false)}
                className="rounded-full border border-accent/40 p-1 text-accent hover:bg-accent/10"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm text-primary-content/80">
              Por privacidad, solo comparto mi certificado de título firmado
              digitalmente dentro de un proceso real de selección.
            </p>

            <p className="mt-3 text-sm text-primary-content/80">
              Si necesitas validarlo, contáctame por LinkedIn:
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
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationSection;
