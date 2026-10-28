import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { Button } from "../components/Button"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { profile } from "../data/profile"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresse e-mail invalide"
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    // Note: Frontend only form - requires backend/service integration
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("error")
    }, 500)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }
  
  const contactLinks = [
    { name: "E-mail", icon: Mail, href: profile.contact.email ? `mailto:${profile.contact.email}` : null, value: profile.contact.email },
    { name: "GitHub", icon: Github, href: profile.contact.github, value: profile.contact.github },
    { name: "LinkedIn", icon: Linkedin, href: profile.contact.linkedin, value: profile.contact.linkedin },
  ]
  
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Construisons quelque chose d'utile."
          description="Ouvert aux échanges autour du développement logiciel, des projets Full Stack et de l'intelligence artificielle."
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6">Me contacter</h3>
            <div className="space-y-4 mb-8">
              {contactLinks.map((link) => {
                const Icon = link.icon
                if (!link.href) {
                  return (
                    <div
                      key={link.name}
                      className="flex items-center gap-3 p-4 border border-border bg-surface/50 rounded-lg opacity-50"
                    >
                      <Icon className="w-5 h-5 text-text-secondary" />
                      <div>
                        <p className="text-sm text-text-primary">{link.name}</p>
                        <p className="text-xs text-text-secondary">À configurer</p>
                      </div>
                    </div>
                  )
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "E-mail" ? "_blank" : undefined}
                    rel={link.name !== "E-mail" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 border border-border bg-surface rounded-lg hover:border-accent/40 hover:bg-surface/80 transition-all duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-text-primary">{link.name}</p>
                      <p className="text-xs text-text-secondary group-hover:text-accent transition-colors">
                        {link.value || link.name}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-text-secondary">
              Le formulaire ci-dessous nécessite une intégration avec un service de formulaire ou un backend pour fonctionner. Voir le README pour plus de détails.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-text-primary">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-surface border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${
                    errors.name ? "border-red-500/50" : "border-border focus:border-accent/50"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-text-primary">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-surface border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${
                    errors.email ? "border-red-500/50" : "border-border focus:border-accent/50"
                  }`}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-text-primary">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-surface border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${
                    errors.subject ? "border-red-500/50" : "border-border focus:border-accent/50"
                  }`}
                  placeholder="Sujet de votre message"
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 bg-surface border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors resize-none ${
                    errors.message ? "border-red-500/50" : "border-border focus:border-accent/50"
                  }`}
                  placeholder="Votre message..."
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>
              
              {submitStatus === "error" && (
                <p className="text-sm text-yellow-400/80">
                  Le formulaire n'est pas configuré pour l'envoi. Veuillez utiliser les liens ci-dessus ou configurer un service de formulaire.
                </p>
              )}
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
