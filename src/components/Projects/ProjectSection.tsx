import { Project } from '@/lib/types'
import { SparklesCore } from '../UI/sparkles'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    // Menos padding arriba para acercarlo al carrusel
    <section id="projects" className="relative pt-0 pb-10 md:pt-2 md:pb-14">
      {/* Encabezado centrado: título + sparkles debajo */}
      <div className="relative mb-6 flex flex-col items-center text-center">
        {/* Contenedor para que título y banda tengan el mismo ancho */}
        <div className="w-full max-w-4xl">
          {/* Título principal */}
          <h2 className="text-balance text-2xl font-semibold leading-tight text-primary-content md:text-3xl lg:text-4xl">
            Cómo aporto valor como
            <span className="block text-accent">
              Senior Backend Java &amp; Arquitecto de Software
            </span>
          </h2>

          {/* Banda de sparkles justo DEBAJO del título,
              ocupando el mismo ancho del contenedor */}
          <div className="pointer-events-none relative mt-2 h-16 w-full">
            {/* Líneas de gradiente (rayo brillante) a todo el ancho */}
            <div className="absolute top-0 h-[2px] w-full bg-linear-to-r from-transparent via-accent to-transparent blur-sm" />
            <div className="absolute top-0 h-px w-full bg-linear-to-r from-transparent via-accent to-transparent" />
            <div className="absolute left-1/4 top-0 h-[5px] w-1/2 bg-linear-to-r from-transparent via-[#0ea5e9] to-transparent blur-sm" />
            <div className="absolute left-1/4 top-0 h-px w-1/2 bg-linear-to-r from-transparent via-[#0ea5e9] to-transparent" />

            {/* Partículas */}
            <SparklesCore
              background="transparent"
              minSize={0.8}
              maxSize={2}
              particleDensity={260}
              speed={3}
              particleColor="#ffffff"
              className="h-full w-full"
            />

            {/* Máscara radial anclada ARRIBA, para que el brillo salga justo bajo el título */}
            <div className="absolute inset-0 h-full w-full bg-primary [mask-image:radial-gradient(420px_220px_at_top,transparent_18%,white)]" />
          </div>
        </div>
      </div>

      {/* De momento seguimos mostrando los proyectos;
          luego aquí meteremos el Bento Grid / highlights. */}
      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.priority} data={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
