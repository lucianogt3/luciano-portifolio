import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';     
import Projects from './components/Projects'; 
import Experience from './components/Experience';
import Education from './components/Education'; 
import Contact from './components/Contact';  

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-inter">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Luciano Lino Pereira. Transformando experiência clínica em soluções digitais.</p>
          <p className="mt-2 text-sm">Desenvolvido com React, TypeScript e Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
