import { motion } from 'framer-motion';
function EspaceProjet(props) {
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
    <>    
    <div className={`items-center flex flex-col pb-10 ${props.inverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <motion.div {...(props.inverse ? slideLeft : slideRight)} className="flex flex-col items-center md:w-1/2 mx-10">
            <h2 className="font-serif-display text-2xl md:text-4xl text-center">
                {props.titre}
            </h2>
            <h3 className="font-space-grotesk text-xl md:text-2xl text-purple-second font-bold text-center">
                {props.soustitre}
            </h3>
            <p className="font-open-sans text-lg text-justify">
                {props.description}
            </p>
            <div className="flex flex-row flex-wrap gap-2 mt-3 justify-center">
               {props.techno && props.techno.map((techno, index) => (
                    <div className="inline-flex items-center gap-2 bg-blue-second text-white px-4 py-2 rounded-xl shadow-md font-sans">
                        <span className="font-bold text-xl tracking-wide ">{techno}</span>
                    </div>
                ))} 
            </div>
        </motion.div>
        <motion.img {...(props.inverse ? slideRight : slideLeft)} src={props.imageprojet} alt="screen du puissance 4 automatique dans le terminal" className={`md:hidden ${props.fullscreen ? 'w-full' : 'h-full'} object-cover mt-5`}/>
        <motion.div {...(props.inverse ? slideRight : slideLeft)} className={`hidden md:flex border-projets ${props.inverse ? 'ms-10' : 'me-10'} overflow-hidden h-120`}>
            <img src={props.imageprojet} alt="screen du puissance 4 automatique dans le terminal" className={`${props.fullscreen ? 'w-full' : 'h-full'} object-cover`}/>
        </motion.div>
    </div>
    </>
  )
}



export default EspaceProjet