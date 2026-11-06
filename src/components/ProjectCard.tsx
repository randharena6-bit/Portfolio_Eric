import { motion, useReducedMotion } from "framer-motion"
import type { PointerEvent } from "react"
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react"
import type { Project } from "../data/projects"
import { Button } from "./Button"

interface ProjectCardProps {
  project: Project
  onClick?: () => void
  featured?: boolean
}

export function ProjectCard({ project, onClick, featured = false }: ProjectCardProps) {
  const reducedMotion = useReducedMotion()
  const moveVisual = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 18}deg`)
    event.currentTarget.style.setProperty("--tilt-y", `${x * 24}deg`)
    event.currentTarget.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`)
    event.currentTarget.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`)
  }
  const resetVisual = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg")
    event.currentTarget.style.setProperty("--tilt-y", "0deg")
  }
  const statusLabels = {
    "en-cours": "Projet en cours",
    "prototype": "Prototype",
    "termine": "Terminé",
    "a-venir": "À venir",
  }
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group relative border border-border bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/40 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="project-visual" aria-hidden="true" onPointerMove={moveVisual} onPointerLeave={resetVisual}><div className="project-visual-grid" /><div className="project-glow" /><span className="project-index">{project.id === "mitandrina" ? "01" : project.id === "fullstack-app" ? "02" : project.id === "mobile-app" ? "03" : "04"} / PROJECT</span><div className="project-3d"><div className="project-ring project-ring-one" /><div className="project-ring project-ring-two" /><div className="project-shape"><span>✳</span></div><div className="project-satellite" /></div><span className="project-visual-label">{project.category.toUpperCase()} — EXPLORATION</span></div>
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded mb-3">
              {project.category}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors duration-200">
              {project.name}
            </h3>
          </div>
          <span className="text-xs text-text-secondary font-mono">
            {statusLabels[project.status]}
          </span>
        </div>
        
        <p className="text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs text-text-secondary border border-border rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {project.demoUrl ? (
            <Button href={project.demoUrl} variant="ghost" size="sm" className="text-xs">
              <ExternalLink className="w-3.5 h-3.5" />
              Démonstration
            </Button>
          ) : (
            <span className="text-xs text-text-secondary px-3 py-1.5">
              Démonstration à venir
            </span>
          )}
          
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="ghost" size="sm" className="text-xs">
              <GitBranch className="w-3.5 h-3.5" />
              Code source
            </Button>
          ) : (
            <span className="text-xs text-text-secondary px-3 py-1.5">
              Projet en cours
            </span>
          )}
          
          {onClick && (
            <button
              onClick={onClick}
              className="ml-auto text-xs text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
