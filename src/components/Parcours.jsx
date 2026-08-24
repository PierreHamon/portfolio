import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import logo_callo from "./../assets/icons/logo_marcelcallo.png";
import logo_iut from "./../assets/icons/logo_iut_lannion.webp";
import logo_cil from "./../assets/icons/logo_cil.webp";
import ElementParcours from "./ElementParcours";

function Parcours() {
  const containerRef = useRef(null);

  // Suivi du scroll sur TOUTE la section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "end start" signifie que l'animation se termine quand le BAS de la section atteint le HAUT de l'écran
    offset: ["start 60%", "end start"] 
  });

  // Animation fluide du remplissage (évite les à-coups)
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="parcours" className="py-10">
      <div className="flex justify-center items-center py-5">
        <h1 className="title-primary">Parcours</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="3em" height="3em" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2.2 10.4c-.6-.3-.6-1.1 0-1.4l9.1-4.8c.4-.2.9-.2 1.4 0l9.1 4.8c.6.3.6 1.1 0 1.4l-9.1 4.8c-.4.2-.9.2-1.4 0z" />
        <path d="M6 12.5v4c0 2.2 2.7 4 6 4s6-1.8 6-4v-4" />
        <path d="M21 10.8v6" />
      </svg>
      </div>

      <div ref={containerRef} className="relative w-11/12 max-w-[1500px] mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-6 -bottom-300 w-1 bg-gray-200 z-0" />
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-1/2 -translate-x-1/2 top-6 -bottom-300 w-1 bg-purple-600 shadow-[0_0_12px_#9333ea] z-10"
        />
        <ElementParcours 
          titre="Lycée Marcel callo" 
          dates="2019 - 2022"
          sousTitre="BAC Maths et NSI option européenne"
          texte="J'ai été étudiant au lycée Marcel callo à Redon (35600), où j'ai décroché mon BAC spécialité Math et NSI mention bien et européenne."
          image={logo_callo}
        />
        <ElementParcours 
          titre="Iut de Lannion" 
          dates="2022 - 2025"
          sousTitre="BUT informatique en alternance"
          texte="J'ai été étudiant à l'IUT de Lannion (22300), j'y ai obtenu mon BUT informatique parcours développement d'applications mention bien. Ma deuxième et troisième année ont été faites en alternance au Centre Informatique de Lamballe (CIL)."
          image={logo_iut}
          reverse={true}
        />
        <ElementParcours 
          titre="Alternance CIL" 
          dates="2023 - 2025"
          sousTitre="Développeur IBM i"
          texte="Lors de mon alternance j'ai été apprenti développeur IBM i au sein du CIL, j'y fais quelques tâches simples d'abord puis au fur et à mesure des projets plus conséquents."
          image={logo_cil}
        />
      </div>
    </section>
  );
}

export default Parcours;