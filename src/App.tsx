import './App.css';
import { ThemeProvider } from './hooks/useTheme';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
