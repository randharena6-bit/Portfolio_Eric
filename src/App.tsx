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
