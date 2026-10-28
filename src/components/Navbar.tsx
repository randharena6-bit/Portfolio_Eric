import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { profile } from "../data/profile"
import { Button } from "./Button"
import { useTheme } from "../context/ThemeContext"

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Projets", href: "#projets" },
  { name: "Compétences", href: "#competences" },
  { name: "À propos", href: "#apropos" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#accueil"
            className="font-mono text-sm font-medium tracking-wide hover:text-accent transition-colors"
          >
            {profile.brand}
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-surface"
              aria-label="Basculer le thème"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Button href="#contact" variant="secondary" size="sm">
              Me contacter
            </Button>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            <div className="pt-3 border-t border-border space-y-3">
              <button
                onClick={() => {
                  toggleTheme()
                  handleLinkClick()
                }}
                className="flex items-center gap-2 w-full text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === "dark" ? "Mode clair" : "Mode sombre"}
              </button>
              <Button href="#contact" variant="secondary" size="sm" className="w-full" onClick={handleLinkClick}>
                Me contacter
              </Button>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
