import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { GraduationCap, Target, BookOpen } from "lucide-react"
import { profile } from "../data/profile"

export function Journey() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={profile.journeyTitle}
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="border border-border bg-surface rounded-lg p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Formation</h3>
            </div>
            <p className="text-text-primary mb-2">{profile.journeyCurrent}</p>
            <p className="text-text-secondary text-sm">Madagascar</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border bg-surface rounded-lg p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Axes de développement</h3>
            </div>
            <ul className="space-y-2">
              {profile.journeyAxes.map((axis, index) => (
                <li key={index} className="flex items-start gap-2 text-text-secondary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>{axis}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 border border-border bg-surface rounded-lg p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Objectifs</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {profile.journeyObjectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-2 text-text-secondary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
