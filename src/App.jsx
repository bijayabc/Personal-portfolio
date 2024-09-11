import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"

const App = () => {
  return (
    // Entire viewport
    <div 
    className="relative h-full overflow-y-auto antialiased">

      {/* background image */}
      <div 
      className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

      {/* Main Body */}
        <div
        className="relative z-10 flex flex-col items-center p-4
        space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <WorkExperience />
          <Education />
          < ContactForm />
          <Footer />
        </div>
      
    </div>
  )
}

export default App