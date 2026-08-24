import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ElementParcours(props) {
    const elementRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start 75%", "center 50%"]
    });

    const pointScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.3]);
    const pointGlow = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px 0px 0px rgba(147, 51, 234, 0)", "0px 0px 12px rgba(147, 51, 234, 1)"]
    );

    const slideRight = {
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const slideLeft = {
        initial: { opacity: 0, x: +80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <div ref={elementRef} className={`relative flex justify-center items-center my-10 w-full gap-35 ${props.reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            
            {/* CARTE : w-[48%] pour utiliser presque la moitié de l'écran */}
            <motion.div 
                {...(props.reverse ? slideLeft : slideRight)} 
                className={`w-[48%] flex bg-white rounded-xl p-6 gap-6 items-center z-20 shadow-md`}
            >
                <div className="flex-1">
                    <div className="flex flex-row items-baseline gap-2 mb-2">
                        <h2 className="font-serif-display text-3xl font-bold">{props.titre}</h2>
                        <span className="font-open-sans font-semibold text-gray-500 text-sm">{props.dates}</span>
                    </div>
                    <h3 className="font-space-grotesk text-lg text-purple-second font-bold mb-2">
                        {props.sousTitre}
                    </h3>
                    <p className="font-open-sans text-base text-justify leading-relaxed">
                        {props.texte}
                    </p>
                </div>
                <img src={props.image} alt={`Logo ${props.titre}`} className="w-40 h-40 object-contain shrink-0"/>
            </motion.div>

            {/* POINT CENTRAL */}
            <motion.div 
                style={{ 
                    scale: pointScale,
                    boxShadow: pointGlow
                }}
                className="timeline-point absolute left-1/2 -translate-x-1/2 z-20 bg-purple-600 rounded-full w-4 h-4"
            />

            {/* ESPACE VIDE EN FACE (même largeur que la carte) */}
            <div className="w-[48%]"></div>
        </div>
    );
}

export default ElementParcours;