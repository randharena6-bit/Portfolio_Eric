import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { skillGroups } from "../data/skills"

export function Skills() {
  const statusLabels = {
    used: "Utilisé",
    learning: "En cours",
    explore: "À explorer",
  }
  
  const statusColors = {
    used: "text-accent bg-accent/10 border-accent/20",
    learning: "text-text-primary bg-surface border-border",
    explore: "text-text-secondary bg-surface/50 border-border/50",
  }
  
  return (
    <section id="competences" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Mon environnement technique."
          description="Technologies que j'utilise, que j'apprends et que j'explore."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="border border-border bg-surface rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 text-xs border rounded transition-colors ${statusColors[skill.status]}`}
                    title={statusLabels[skill.status]}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4 text-xs text-text-secondary"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Utilisé dans des projets</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-primary" />
            <span>En cours d'apprentissage</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-secondary/50" />
            <span>À explorer</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
