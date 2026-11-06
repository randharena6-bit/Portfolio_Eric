import { motion } from "framer-motion"
import { lazy, Suspense } from "react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { profile } from "../data/profile"
const Helmet3D = lazy(() => import("../components/Helmet3D").then(module => ({ default: module.Helmet3D })))

export function Hero() {
  return (
    <section id="accueil" className="hero-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="hero-eyebrow"><span className="status-dot" /> {profile.heroStatus}</div>
        <div className="hero-layout">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-copy">
            <div className="hero-intro">BONJOUR, MOI C’EST ERIC <span>✳</span></div>
            <h1 className="hero-title"><span className="hero-title-line">Des idées.</span><span className="hero-title-line hero-title-accent">Du code.</span><span className="hero-title-line">De l’impact<span className="accent-dot">.</span></span></h1>
            <p>{profile.heroSubtitle}</p>
            <div className="hero-actions">
              <a href="#projets" className="hero-button">Explorer mes projets <ArrowUpRight size={18} /></a>
              <a href="#contact" className="hero-text-link">Parlons de votre idée <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}><Suspense fallback={<div className="hero-scene"><div className="scene-orb" /><div className="scene-fallback">✳</div></div>}><Helmet3D /></Suspense></motion.div>
        </div>
        <div className="hero-footer"><span>FULL STACK DEVELOPER <i>✳</i> AI ENTHUSIAST</span><a href="#projets">DÉFILER POUR DÉCOUVRIR <ArrowDownRight size={16} /></a><span>ANTANANARIVO, MADAGASCAR</span></div>
      </div>
    </section>
  )
}
