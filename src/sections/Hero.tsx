import { motion } from "framer-motion"
import { ArrowDown, Code2, Sparkles, Network } from "lucide-react"
import { profile } from "../data/profile"
import { Button } from "../components/Button"

export function Hero() {
  const titleLines = profile.heroTitle.split('\n')
  
  return (
    <section id="accueil" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {profile.heroStatus}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6"
            >
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {index === 1 ? (
                    <>
                      à la rencontre du <span className="text-accent">code</span> et de l'<span className="text-accent">IA</span>.
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              {profile.heroSubtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button href="#projets" size="lg">
                Explorer mes projets
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Me contacter
              </Button>
            </motion.div>
            
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#apropos"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
            >
              Découvrir mon parcours
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative border border-border bg-surface rounded-lg p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span>portfolio.tsx</span>
                </div>
                
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex">
                    <span className="text-accent mr-2">const</span>
                    <span className="text-text-primary">developer</span>
                    <span className="text-text-secondary mx-2">=</span>
                    <span className="text-text-secondary">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-1.5">
                    <div>
                      <span className="text-accent">name</span>
                      <span className="text-text-secondary">: </span>
                      <span className="text-[#98C379]">"Eric"</span>
                      <span className="text-text-secondary">,</span>
                    </div>
                    <div>
                      <span className="text-accent">role</span>
                      <span className="text-text-secondary">: </span>
                      <span className="text-[#98C379]">"Full Stack Developer"</span>
                      <span className="text-text-secondary">,</span>
                    </div>
                    <div>
                      <span className="text-accent">focus</span>
                      <span className="text-text-secondary">: </span>
                      <span className="text-[#98C379]">["Web", "AI", "Solutions"]</span>
                      <span className="text-text-secondary">,</span>
                    </div>
                    <div>
                      <span className="text-accent">location</span>
                      <span className="text-text-secondary">: </span>
                      <span className="text-[#98C379]">"Madagascar"</span>
                      <span className="text-text-secondary">,</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-text-secondary">{"}"}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                      <Code2 className="w-3.5 h-3.5 text-accent" />
                      <span>Clean Code</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>Innovation</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                      <Network className="w-3.5 h-3.5 text-accent" />
                      <span>Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
