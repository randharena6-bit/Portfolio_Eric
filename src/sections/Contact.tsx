import { ArrowUpRight, Mail, GitBranch, Link2 } from "lucide-react"
import { profile } from "../data/profile"

export function Contact() {
  const links = [
    { label: "E-mail", href: profile.contact.email ? `mailto:${profile.contact.email}` : "", icon: Mail },
    { label: "GitHub", href: profile.contact.github, icon: GitBranch },
    { label: "LinkedIn", href: profile.contact.linkedin, icon: Link2 },
  ].filter(link => link.href)
  return <section id="contact" className="contact-section px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto contact-inner">
      <div className="section-kicker">06 / CONTACT <span>↗</span></div>
      <div className="contact-layout"><div><p className="contact-overline">UNE IDÉE EN TÊTE ?</p><h2>Créons la<br /><em>suite ensemble.</em></h2></div>
        <div className="contact-copy"><p>Un projet, une opportunité ou simplement envie d’échanger ? Je suis toujours curieux de découvrir de nouvelles idées.</p>
          {links.length > 0 ? <div className="contact-links">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label === "E-mail" ? undefined : "_blank"} rel={label === "E-mail" ? undefined : "noopener noreferrer"}><Icon size={18} /> {label} <ArrowUpRight size={17} /></a>)}</div> : <p className="contact-note">Mes coordonnées seront bientôt disponibles ici.</p>}
        </div></div>
      <div className="contact-star" aria-hidden="true">✳</div>
    </div>
  </section>
}
