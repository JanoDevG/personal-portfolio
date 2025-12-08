// src/components/Education/EducationSection.tsx
"use client";

import * as React from "react";
import Image from "next/image";
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

const LINKEDIN_URL =
  "https://www.linkedin.com/in/tu-perfil"; // TODO: reemplaza por tu perfil real

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
  logoSrc?: string;
  logoAlt?: string;
  status?: EducationStatus;
  // nuevos campos
  credentialUrl?: string;
  isDegree?: boolean;
};

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

const stories: EducationStory[] = [
  {
    kind: "formal",
    title: "Ingeniería en Informática",
    context:
      "Título profesional · Universidad Tecnológica de Chile INACAP",
    period: "Carrera finalizada",
    summary:
      "Formación en ingeniería de software, bases de datos, arquitectura de sistemas y desarrollo de aplicaciones empresariales.",
    details:
      "Este ciclo formal me dio la base sólida en programación, estructuras de datos, diseño de bases de datos, redes y fundamentos de arquitectura de software que luego he aplicado en entornos corporativos y bancarios.",
    highlights: [
      "Énfasis en ingeniería de software y desarrollo orientado a capas.",
      "Trabajo con bases de datos relacionales y modelado de datos.",
      "Proyectos académicos orientados a aplicaciones empresariales reales.",
    ],
    isDegree: true,
    // logoSrc: "/logos/inacap.png",
    // logoAlt: "Universidad Tecnológica de Chile INACAP",
  },
  {
    kind: "cert",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    context: "Certificación oficial · Oracle",
    period: "Issued Jun 2025 · Expires Jun 2035 · Exam 1Z0-829",
    summary:
      "Certificación que valida dominio avanzado del lenguaje Java y de la plataforma Java SE 17.",
    details:
      "Refuerza de forma oficial mi experiencia práctica en Java con un respaldo reconocido a nivel internacional.",
    highlights: [
      "Profundización en APIs modernas de Java SE 17.",
      "Concurrencia, colecciones, lambdas y streams.",
      "Buenas prácticas de diseño orientado a objetos y manejo robusto de errores.",
    ],
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD5390904EB94E5FCC800042B9450CF905AC2EE7DD75514ACD498A2622111888&trk=public_profile_see-credential",
    // logoSrc: "/logos/ocp17.png",
    // logoAlt: "Oracle Certified Professional Java SE 17 Developer",
  },
  {
    kind: "cert",
    title:
      "Programa Especializado – Developing APIs with Google Cloud's Apigee API Platform",
    context: "Coursera · Google Cloud",
    period: "Issued Jan 2022",
    summary:
      "Programa especializado centrado en diseño, seguridad y operación de APIs usando Apigee sobre Google Cloud.",
    details:
      "Profundización en diseño de APIs contract-first, políticas de seguridad, versionado, monitoreo y ciclo de vida completo de APIs en entornos enterprise.",
    highlights: [
      "Diseño de APIs orientadas a contratos y reutilización.",
      "Gestión de políticas de seguridad, cuotas y limitación de tráfico.",
      "Visibilidad del ciclo de vida de APIs en plataformas cloud.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6T3U29X29JS?trk=public_profile_see-credential",
    // logoSrc: "/logos/google-cloud.png",
    // logoAlt: "Google Cloud / Apigee",
  },
  {
    kind: "learning",
    title: "Máster Completo en Java de cero a experto 2025 (+180 hrs)",
    context: "Udemy",
    period: "Issued Jan 2024",
    summary:
      "Programa intensivo para reforzar desde fundamentos de Java hasta patrones avanzados y buenas prácticas modernas.",
    details:
      "Me permitió unificar y actualizar conocimientos de Java, reforzando áreas clave como colecciones, programación funcional, manejo de excepciones y diseño orientado a objetos.",
    highlights: [
      "+180 horas de contenido práctico en Java.",
      "Cobertura de fundamentos, APIs modernas y patrones de diseño.",
      "Aplicación práctica en proyectos y ejercicios guiados.",
    ],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-88f0712d-b71c-4591-bc30-3faa8db68586/?trk=public_profile_see-credential",
    // logoSrc: "/logos/udemy.png",
    // logoAlt: "Udemy",
  },
  {
    kind: "learning",
    title: "Implementar GitFlow en GitLab y GitHub",
    context: "Udemy",
    summary:
      "Curso práctico enfocado en la implementación de GitFlow en equipos que trabajan con GitLab y GitHub.",
    details:
      "Orientado a mejorar la colaboración entre desarrolladores, organización de ramas y soporte al ciclo de vida de desarrollo y despliegue.",
    highlights: [
      "Definición de flujos de ramas para features, releases y hotfixes.",
      "Aplicación de GitFlow sobre GitLab y GitHub.",
      "Mejor alineamiento entre flujos de desarrollo y pipelines CI/CD.",
    ],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-91746dc2-a8ce-46b1-ba12-08b780fd53cd/?trk=public_profile_see-credential",
    // logoSrc: "/logos/git.png",
    // logoAlt: "Git / GitFlow",
  },
  // 🔹 Próximos pasos (3 items separados)
  {
    kind: "learning",
    title: "Diplomado en Arquitectura y Seguridad Cloud",
    context: "Universidad de Santiago de Chile (USACH)",
    period: "En formación",
    summary:
      "Programa de posgrado orientado a arquitectura de software en la nube, seguridad y diseño de plataformas escalables.",
    details:
      "Profundización en arquitectura cloud, gobierno de plataformas, modelos de seguridad y patrones para sistemas distribuidos de misión crítica.",
    highlights: [
      "Diseño de arquitecturas cloud seguras y escalables.",
      "Buenas prácticas de gobierno, estándares y compliance.",
      "Enfoque en escenarios empresariales y financieros.",
    ],
    status: {
      label: "EN FORMACIÓN",
      tone: "in-progress",
    },
  },
  {
    kind: "learning",
    title:
      "Certificación oficial de Spring (Spring Boot / Spring Professional)",
    context: "VMware · Ecosistema Spring",
    period: "Planificada",
    summary:
      "Próximo paso para formalizar la experiencia práctica con Spring Boot y su ecosistema en una certificación oficial.",
    details:
      "El foco es consolidar conocimientos en Spring Core, Spring Boot, Data, Security y prácticas de arquitectura para servicios y microservicios.",
    highlights: [
      "Cobertura de los módulos principales de Spring y Spring Boot.",
      "Énfasis en aplicaciones empresariales y servicios de backend.",
      "Refuerzo de buenas prácticas de arquitectura y pruebas.",
    ],
    status: {
      label: "PRÓXIMAMENTE",
      tone: "upcoming",
    },
  },
  {
    kind: "learning",
    title: "Certificación Microsoft Azure Fundamentals",
    context: "Microsoft · Azure (nivel fundamental)",
    period: "Planificada",
    summary:
      "Certificación de fundamentos de Azure para complementar la experiencia en backend y banca con conocimientos formales de cloud.",
    details:
      "Busco reforzar conceptos de servicios básicos de Azure, modelos de despliegue, seguridad y costos, como base para futuras certificaciones de arquitectura cloud.",
    highlights: [
      "Servicios fundamentales de Azure y sus casos de uso.",
      "Conceptos de seguridad, identidad y gobernanza en la nube.",
      "Modelo de precios, costos y responsabilidades compartidas.",
    ],
    status: {
      label: "PRÓXIMAMENTE",
      tone: "upcoming",
    },
  },
];

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
      {/* Punto de la línea de tiempo con icono — centrado verticalmente */}
      <div className="absolute left-[12px] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="
            flex h-5 w-5 items-center justify-center
            rounded-full bg-secondary border border-accent/50
          "
        >
          <KindIcon className="h-3 w-3 text-accent" />
        </div>
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="w-full text-left focus:outline-none">
          <div
            className="
              rounded-xl border border-accent/20 bg-secondary/90
              px-4 py-3 md:px-5 md:py-4
              transition-colors hover:border-accent/60
            "
          >
            <div className="flex items-start justify-between gap-3">
              {/* Texto principal */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-primary-content">
                    {story.title}
                  </p>
                </div>

                <p className="text-[11px] text-primary-content/70">
                  {story.context}
                </p>

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

              {/* Logo + tipo + chevron */}
              <div className="flex flex-col items-end gap-2">
                {story.logoSrc && (
                  <Image
                    src={story.logoSrc}
                    alt={story.logoAlt || story.title}
                    width={80}
                    height={24}
                    className="h-5 w-auto object-contain opacity-80"
                  />
                )}

                <span
                  className={`
                    inline-flex items-center gap-1 rounded-full border px-2 py-[2px]
                    text-[10px] font-mono uppercase tracking-wide
                    ${cfg.className}
                  `}
                >
                  <cfg.icon className="h-3 w-3" />
                  <span>{cfg.label}</span>
                </span>

                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1"
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
                key="edu-content"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="
                  ml-1 mt-2 rounded-xl border border-primary-content/10 
                  bg-secondary/80 px-4 py-3 md:ml-2 md:px-5 md:py-4
                  text-sm text-primary-content/80
                "
              >
                <p className="leading-snug">{story.summary}</p>

                {story.details && (
                  <p className="mt-2 text-[13px] leading-snug text-primary-content/80">
                    {story.details}
                  </p>
                )}

                {story.highlights && story.highlights.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent/80">
                      Aspectos destacados
                    </p>
                    <ul className="mt-1 space-y-1.5 text-[13px] leading-snug">
                      {story.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-primary-content/80"
                        >
                          <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Botón de verificación dentro de la card expandida */}
                {(story.isDegree || story.credentialUrl) && (
                  <div className="mt-4">
                    {story.isDegree ? (
                      <button
                        type="button"
                        onClick={onRequestDegreeVerification}
                        className="
                          inline-flex items-center gap-1 rounded-full border 
                          border-accent/60 px-3 py-1 text-xs font-medium 
                          text-accent hover:bg-accent/10
                        "
                      >
                        Cómo verificar este título
                      </button>
                    ) : (
                      <a
                        href={story.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1 rounded-full border 
                          border-accent/60 px-3 py-1 text-xs font-medium 
                          text-accent hover:bg-accent/10
                        "
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

export const EducationSection: React.FC = () => {
  const [showDegreeModal, setShowDegreeModal] = React.useState(false);

  return (
    <section id="education" className="my-20">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-content">
          Educación, certificaciones y formación continua
        </h2>
        <p className="mt-3 text-center text-sm md:text-base text-primary-content/75">
          Una vista rápida de la formación que respalda mi trabajo como
          desarrollador backend y arquitecto de software en entornos
          empresariales y bancarios.
        </p>

        <div className="mt-8 relative">
          {/* Línea vertical de la timeline */}
          <div className="absolute left-[12px] top-0 bottom-3 hidden md:block border-l border-accent/30" />

          <div className="space-y-5">
            {stories.map((story, index) => (
              <EducationTimelineItem
                key={story.title + index}
                story={story}
                index={index}
                onRequestDegreeVerification={() =>
                  setShowDegreeModal(true)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal para verificación de título profesional */}
      {showDegreeModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg rounded-xl border border-accent/40 bg-secondary p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-primary-content">
                Verificación de título profesional
              </h3>
              <button
                type="button"
                onClick={() => setShowDegreeModal(false)}
                className="rounded-full border border-accent/40 p-1 text-accent hover:bg-accent/10"
                aria-label="Cerrar"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm text-primary-content/80 leading-relaxed">
              El certificado de título profesional contiene información
              personal sensible. Por resguardo de privacidad, solo
              comparto una copia firmada de este documento en el contexto
              de un proceso de selección real y con una empresa
              identificada.
            </p>

            <p className="mt-3 text-sm text-primary-content/80 leading-relaxed">
              Si estás conduciendo un proceso de selección y necesitas
              validar mi título, puedes contactarme a través de mi perfil
              de LinkedIn. Con gusto coordinaré el envío de la
              documentación necesaria:&nbsp;
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                Ver perfil en LinkedIn
              </a>
              .
            </p>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDegreeModal(false)}
                className="
                  rounded-full border border-accent/60 px-4 py-1.5 
                  text-sm font-medium text-accent hover:bg-accent/10
                "
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
