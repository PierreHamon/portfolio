import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Parcours from './components/Parcours';
import Passions from './components/Passions';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const timelineContainerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Suivi de scroll sur la zone allant du Parcours jusqu'au bas du site
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 60%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen w-full bg-brand-bg text-slate-900 overflow-x-hidden">
      {/* Bouton retour en haut */}
      <button 
        type="button" 
        className="fixed bottom-5 right-5 z-50 cursor-pointer" 
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#7C3AED" />
          <path d="M32 28 L24 20 L16 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Header />
      <Hero />
      <AboutMe />
      <Competences />
      <Projets />

      {/* ZONE TIMELINE ET SECTIONS SUIVANTES */}
      <div ref={timelineContainerRef} className="relative">
        
        {/* Ligne grise de fond (traverse Parcours, Passions, CV, etc.) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-24 bottom-10 w-1 bg-gray-200 z-0" />
        
        {/* Ligne violette animée */}
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-1/2 -translate-x-1/2 top-24 bottom-10 w-1 bg-purple-600 shadow-[0_0_12px_#9333ea] z-10"
        />

        {/* Composants traversés par la ligne */}
        <div className="relative z-20">
          <Parcours />
          <Passions />
          <CV />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;