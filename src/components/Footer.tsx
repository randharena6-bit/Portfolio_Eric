import { profile } from "../data/profile"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm">{profile.brand}</span>
            <span className="text-text-secondary">•</span>
            <span className="text-sm text-text-secondary">
              © {currentYear} {profile.name}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {profile.contact.github && (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.contact.linkedin && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {profile.contact.email && (
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <p className="text-xs text-text-secondary">
            Conçu et développé avec React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
