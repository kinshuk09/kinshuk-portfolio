import useScrollReveal from './hooks/useScrollReveal';
import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Ecosystem from './sections/Ecosystem';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Experience from './sections/Experience';
import Solutions from './sections/Solutions';
import ArchitectMode from './sections/ArchitectMode';
import Certifications from './sections/Certifications';
import Constellation from './sections/Constellation';
import Contact from './sections/Contact';
export default function App() {
  useScrollReveal();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Ecosystem />
        <About />
        <Expertise />
        <Experience />
        <Solutions />
        <ArchitectMode />
        <Certifications />
        <Constellation />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
