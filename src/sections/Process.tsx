import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  { number: "01", title: "Comprendre", description: "Identifier le problème et les besoins des utilisateurs.", icon: Search },
  { number: "02", title: "Concevoir", description: "Définir l'architecture, les fonctionnalités et l'interface.", icon: PenTool },
  { number: "03", title: "Développer", description: "Construire le frontend, le backend et les intégrations nécessaires.", icon: Code },
  { number: "04", title: "Tester", description: "Vérifier le fonctionnement, corriger et améliorer les performances.", icon: TestTube },
  { number: "05", title: "Déployer", description: "Préparer la mise en ligne et documenter le projet.", icon: Rocket },
]

export function Process() {
  return <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="section-kicker">03 / MA MÉTHODE <span>↘</span></div>
      <SectionHeading title="De l'idée au produit." description="Une approche structurée, de la première question aux derniers détails." />
      <div className="process-grid">{steps.map((step, index) => {
        const Icon = step.icon
        return <motion.div key={step.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }} className="process-card">
          <div className="process-card-top"><span>{step.number} / 05</span><Icon size={20} /></div>
          <div className="process-card-content"><h3>{step.title}</h3><p>{step.description}</p></div>
          <span className="process-card-arrow" aria-hidden="true">↗</span>
        </motion.div>
      })}</div>
    </div>
  </section>
}
