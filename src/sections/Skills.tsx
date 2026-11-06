import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { skillGroups } from "../data/skills"

export function Skills() {
  const statusLabels = { used: "Utilisé dans des projets", learning: "En cours d’apprentissage", explore: "À explorer" }
  return (
    <section id="competences" className="skills-section py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="section-kicker">02 / COMPÉTENCES <span>↘</span></div>
        <SectionHeading title="Les outils derrière les idées." description="Un environnement technique en constante évolution, entre technologies utilisées et nouvelles explorations." />
        <div className="skills-layout">
          <div className="skills-intro"><span className="skills-intro-symbol">✳</span><p>APPRENDRE.<br />EXPÉRIMENTER.<br /><strong>CONSTRUIRE.</strong></p><span>UNE BOÎTE À OUTILS<br />QUI GRANDIT AVEC CHAQUE PROJET.</span></div>
          <div className="skills-list">
            {skillGroups.map((group, groupIndex) => <motion.div key={group.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: groupIndex * 0.05 }} className="skill-row">
              <div className="skill-row-title"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.title}</h3></div>
              <div className="skill-tags">{group.skills.map(skill => <span key={skill.name} className={`skill-tag skill-${skill.status}`} title={statusLabels[skill.status]}><i />{skill.name}<span className="sr-only"> — {statusLabels[skill.status]}</span></span>)}</div>
              <ArrowUpRight className="skill-arrow" size={17} aria-hidden="true" />
            </motion.div>)}
          </div>
        </div>
        <div className="skill-legend"><span><i className="legend-used" /> Utilisé dans des projets</span><span><i className="legend-learning" /> En apprentissage</span><span><i className="legend-explore" /> À explorer</span></div>
      </div>
    </section>
  )
}
