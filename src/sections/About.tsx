import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { User, BookOpen, Target, Lightbulb } from "lucide-react"
import { profile } from "../data/profile"

export function About() {
  const highlights = [
    { icon: BookOpen, text: "Apprentissage continu" },
    { icon: Target, text: "Résolution de problèmes" },
    { icon: Lightbulb, text: "Curiosité technique" },
    { icon: User, text: "Orientation pratique" },
  ]
  
  return (
    <section id="apropos" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Curieux par nature. Ingénieur en devenir."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {profile.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 border border-border bg-surface rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-text-primary">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border border-border bg-surface rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent" />
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                  <span className="text-4xl font-semibold text-accent">E</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
                  <p className="text-text-secondary mb-4">{profile.title}</p>
                  <p className="text-sm text-text-secondary font-mono">{profile.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
