'use client'

import { Project } from '@/lib/types'
import ProjectCard from './ProjectCard'
import { LayoutTextFlip } from '@/components/UI/LayoutTextFlip'
import { SparklesCore } from '../UI/sparkles'
import { messages, Locale } from '@/i18n/messages'

interface ProjectSectionProps {
  projects: Project[]
  locale: Locale | undefined
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, locale }) => {

  const safeLocale: Locale = (locale === "en" || locale === "es") ? locale : "es"
  const t = messages[safeLocale].executive

  return (
    <section id="projects" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1100px] px-4">

        {/* ---------- Executive Header ---------- */}
        <div className="flex flex-col items-center text-center gap-4 relative pb-10">

          {/* TAG */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-content/60">
            {t.tag}
          </p>

          {/* TÍTULO + TEXTO ANIMADO + LAYERS */}
          <div className="relative flex flex-col items-center">

            {/* CONTENEDOR QUE CONTROLA Z-INDEX DEL RECUADRO */}
            <div className="relative z-[10]">

              {/* TEXTO ANIMADO – SIEMPRE SOBRE LAS PARTÍCULAS */}
              <LayoutTextFlip
                text={t.title}
                words={t.words}
                duration={3000}
                className="relative z-[30]"
              />

            </div>

            {/* SPARKLES COLOCADOS ENTRE RECUADRO (z-10) Y TEXTO (z-30) */}
            <div
              className="
                pointer-events-none
                absolute left-0 right-0
                top-[2.1rem]
                mx-auto flex justify-center
                z-[20]
              "
            >
              <div
                className="
                  relative
                  w-[75%]
                  h-12
                  overflow-hidden
                "
              >
                <SparklesCore
                  background="transparent"
                  minSize={1.3}
                  maxSize={3}
                  particleDensity={500}
                  particleColor="#00f2b3"
                  className="h-full w-full"
                />

                {/* Línea verde */}
                <div
                  className="
                    absolute inset-x-0 top-0
                    h-[2px]
                    bg-gradient-to-r from-transparent
                    via-accent/80 to-transparent
                    blur-[2px]
                  "
                />
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN */}
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-content/80 md:text-base z-10">
            {t.description}
          </p>

        </div>
      </div>
    </section>
  )
}

export default ProjectSection
