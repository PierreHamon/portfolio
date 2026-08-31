import { motion } from 'framer-motion';
import angelsegg from './../assets/images/angels_egg.webp';
import belladonna from './../assets/images/belladonna_of_sadness.jpg';
import devilman from './../assets/images/devilman_crybaby.webp';
import grave from './../assets/images/grave.webp';
import ponyo from './../assets/images/ponyo.webp';
import portrait_feu from './../assets/images/portrait_feu.webp';
import psycho from './../assets/images/psycho.webp';
import blood from './../assets/images/there_will_be_blood.webp';
import lucioles from './../assets/images/tombeau_des_lucioles.jpg';
import lotr from './../assets/images/lotr_livre.jpg';
import berserk from './../assets/images/berserk_livre.jpg';
import dune from './../assets/images/dune_livre.jpg';
import jojo from './../assets/images/jojo_livre.jpg';
import fl1 from './../assets/images/fl1.png'
import fl2 from './../assets/images/fl2.png'
import fl3 from './../assets/images/fl3.png'
import fl4 from './../assets/images/fl4.png'
import fl5 from './../assets/images/fl5.png'
import fl6 from './../assets/images/fl6.png'
import fl7 from './../assets/images/fl7.png'
import fl8 from './../assets/images/fl8.png'
import fl9 from './../assets/images/fl9.png'
import fl10 from './../assets/images/fl10.png'
import fl11 from './../assets/images/fl11.png'
import AudioPlayer from './AudioPlayer';

function Passions(props) {

    const slideRight = (delay = 0) => ({
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", delay } // <--- delay injecté ici
    });

    const slideLeft = (delay = 0) => ({
        initial: { opacity: 0, x: +80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", delay } // <--- delay injecté ici
    });

    const slideDown = (delay = 0) => ({
        initial: { opacity: 0, y: -80 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", delay }
    });

    const Fade = {
        initial: { opacity: 0},
        whileInView: { opacity: 1},
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 1, ease: "easeOut" }
    };

  return (
    <>
        <section id="passions" className="relative z-10">
            <div className="flex justify-center items-center">
                <h1 className="title-primary">Passions</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="3em" height="3em" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3.5" y="10.5" width="17" height="9.5" rx="2" />
                    <path d="M3.5 10.5 L3.2 6.8 C3.1 5.7 3.9 4.8 5 4.6 L18.2 2.3 C19.3 2.1 20.3 2.9 20.5 4 L20.8 5.8 C21 6.9 20.2 7.9 19.1 8.1 L3.5 10.5 Z" />
                    <line x1="8.5" y1="9.7" x2="10" y2="3.8" />
                    <line x1="14" y1="8.8" x2="15.5" y2="2.8" />
                </svg>


            </div>
            <h2 className='font-serif-display text-4xl relative z-20 m-5'>Cinéma</h2>
            <div className='w-full relative h-[1000px]'>
                <motion.img {...slideDown()} src={angelsegg} alt="affiche film" className='absolute left-220 top-3 w-150 z-20 bg-white'/>
                <motion.img {...slideLeft()} src={belladonna} alt="affiche film" className='absolute left-320 top-150 w-120 z-20 bg-white'/>
                <motion.img {...slideDown()} src={devilman} alt="affiche film" className='absolute left-250 top-78 w-80 z-20 bg-white'/>
                <motion.img {...slideDown()} src={grave} alt="affiche film" className='absolute left-120 top-63 w-50 z-20 bg-white'/>
                <motion.img {...slideRight()} src={ponyo} alt="affiche film" className='absolute left-140 top-153 w-70 z-20 bg-white'/>
                <motion.img {...slideRight()} src={portrait_feu} alt="affiche film" className='absolute left-80 top-0 w-130 z-20 bg-white'/>
                <motion.img {...slideRight()} src={psycho} alt="affiche film" className='absolute left-40 top-153 w-90 z-20 bg-white'/>
                <motion.img {...slideLeft()} src={blood} alt="affiche film" className='absolute left-400 top-10 w-70 z-20 bg-white'/>
                <motion.img {...slideRight()} src={lucioles} alt="affiche film" className='absolute left-10 top-10 w-80 z-20 bg-white'/>
            </div>
            <h2 className='flex font-serif-display text-4xl justify-end z-20 m-5'>Montage vidéo</h2>
            <div className="flex flex-row w-9/10 h-auto rounded-xl mx-auto my-20 justify-center gap-5">
                <motion.div {...slideRight()} className="flex-1 aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/U2LM3MxTas8"
                        title="Montage vidéo 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>
                <motion.div {...Fade} className="flex-1 aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/cXeQRNSgOxM"
                        title="Montage vidéo 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>
                <motion.div {...slideLeft()} className="flex-1 aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/mJSJxDf4yxs"
                        title="Montage vidéo 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
            <h2 className='flex font-serif-display text-4xl justify-start z-20 m-5'>Création musicale</h2>
            <div className="relative w-full ">
                <div className='flex flex-col justify-center items-center opacity-65'>
                    <motion.img {...slideLeft(0.6)} src={fl1} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideRight(0.6)} src={fl11} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideLeft(0.6)} src={fl10} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideRight(0.6)} src={fl7} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideLeft(0.6)} src={fl8} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideRight(0.6)} src={fl6} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideLeft(0.6)} src={fl2} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideRight(0.6)} src={fl3} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideLeft(0.6)} src={fl4} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideRight(0.6)} src={fl5} alt="affiche film" className='w-[94%] z-20'/>
                    <motion.img {...slideLeft(0.6)} src={fl9} alt="affiche film" className='w-[94%] z-20'/>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-[92%] z-30">
                    <AudioPlayer/>
                </div>
            </div>

            

            <h2 className='flex font-serif-display text-4xl justify-end z-20 m-5'>Littérature</h2>
            <div className='w-full relative h-[1000px]'>
                <motion.img {...slideLeft(0.6)} src={lotr} alt="affiche film" className='absolute left-[62%] top-[2%] w-150 z-20 bg-white'/>
                <motion.img {...slideLeft(0.4)} src={berserk} alt="affiche film" className='absolute left-[43%] top-[20%] w-105 z-20 bg-white'/>
                <motion.img {...slideLeft(0.2)} src={dune} alt="affiche film" className='absolute left-[17%] w-120 z-20 bg-white'/>
                <motion.img {...slideLeft()} src={jojo} alt="affiche film" className='absolute left-[2%] top-[4%] w-90 z-20 bg-white'/>
            
            </div>
        </section>
    </>
  )
}

export default Passions;