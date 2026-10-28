import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description: "Identifier le problème et les besoins des utilisateurs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Définir l'architecture, les fonctionnalités et l'interface.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Développer",
    description: "Construire le frontend, le backend et les intégrations nécessaires.",
    icon: Code,
  },
  {
    number: "04",
    title: "Tester",
    description: "Vérifier le fonctionnement, corriger les erreurs et améliorer les performances.",
    icon: TestTube,
  },
  {
    number: "05",
    title: "Déployer",
    description: "Préparer la mise en ligne et documenter le projet.",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="De l'idée au produit."
          description="Un processus structuré pour transformer des idées en solutions concrètes."
        />
        
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center border border-border bg-surface rounded-lg relative">
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-mono text-accent">{step.number}</span>
                      </div>
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
