import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { ProjectCard } from "../components/ProjectCard"
import { projects } from "../data/projects"

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedProject = projects.find(project => project.id === selectedId)
  useEffect(() => {
    if (!selectedId) return
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedId(null) }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [selectedId])
  return (
    <section id="projets" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-kicker">01 / PROJETS SÉLECTIONNÉS <span>↘</span></div>
        <SectionHeading title="Des idées transformées en projets." description="Une sélection de projets qui illustrent mon intérêt pour le développement logiciel, les données et l'intelligence artificielle." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} onClick={() => setSelectedId(project.id)} />)}
        </div>
      </div>
      {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedId(null)}>
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={event => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedId(null)} aria-label="Fermer les détails"><X size={20} /></button>
          <span className="modal-kicker">{selectedProject.category}</span>
          <h2 id="project-title">{selectedProject.name}</h2>
          <p>{selectedProject.longDescription || selectedProject.description}</p>
          {selectedProject.features && <><h3>Explorations & fonctionnalités</h3><ul>{selectedProject.features.map(feature => <li key={feature}>{feature}</li>)}</ul></>}
          <div className="modal-tech">{selectedProject.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
        </div>
      </div>}
    </section>
  )
}
