import Navbar from '../src/components/Navbar/Nav.jsx';
import Hero from '../src/components/Hero/Hero.jsx';
import About from '../src/components/About/About.jsx';
import Skills from '../src/components/Skills/Skills.jsx';
import Projects from '../src/components/Project/Project.jsx';
import Certificates from '../src/components/Certificates/Certificates.jsx';
import Contact from '../src/components/Contact/Contact.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import '../src/App.css'

function App() {
  return (
    
      <div className="App min-h-screen text-gray-800">
        {/* Keep App.jsx minimal — it just composes components */}
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </main>
      </div>
  );
}
export default App;