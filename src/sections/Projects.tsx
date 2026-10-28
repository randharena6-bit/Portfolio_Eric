import { useState } from "react"
import { SectionHeading } from "../components/SectionHeading"
import { ProjectCard } from "../components/ProjectCard"
import { projects } from "../data/projects"

export function Projects() {
  const [_selectedProject, setSelectedProject] = useState<string | null>(null)
  
  return (
    <section id="projets" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Des idées transformées en projets."
          description="Une sélection de projets qui illustrent mon intérêt pour le développement logiciel, les données et l'intelligence artificielle."
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
