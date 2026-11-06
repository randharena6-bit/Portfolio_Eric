import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Process } from "./sections/Process"
import { About } from "./sections/About"
import { Journey } from "./sections/Journey"
import { Contact } from "./sections/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="motion-marquee" aria-label="Développement web, intelligence artificielle et créativité">
          <div className="motion-marquee-track" aria-hidden="true">{[0, 1].map(copy => <div className="motion-marquee-group" key={copy}><span>CRÉER</span><i>✳</i><span>EXPÉRIMENTER</span><i>✳</i><span>DÉVELOPPER</span><i>✳</i><span>IMAGINER</span><i>✳</i></div>)}</div>
        </div>
        <Projects />
        <Skills />
        <Process />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
