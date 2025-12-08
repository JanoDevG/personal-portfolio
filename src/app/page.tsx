import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import Skills from '@/components/Skills/Skills'
import { getAllProjects, getAllTestimonials } from '@/services'
import { SuccessStoriesSection } from "@/components/SuccessStories/SuccessStoriesSection";
import { EducationSection } from '@/components/Education/EducationSection'


export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
  <Hero />
  <Skills skills={skillList} />
  <div className="mx-auto mt-4 mb-8 max-w-[1200px] px-4 md:mt-8 md:mb-[1.75rem]">
    <ProjectSection projects={projects} />
    <SuccessStoriesSection />
    <EducationSection />
    <ContactSection />
  </div>
</main>

  )
}
