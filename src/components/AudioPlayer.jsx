import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import amireal from "./../assets/audio/AM_I_REAL.mp3"
import deux_mille from "./../assets/audio/2001.mp3"
import freak from "./../assets/audio/freak_monster.mp3"
import journey from "./../assets/audio/Journer to pluto.mp3"
import amireal_cover from "./../assets/images/am_i_real_cover.jpg"
import deux_mille_cover from "./../assets/images/2001_cover.jpg"
import freak_cover from "./../assets/images/freak_cover.jpg"
import journey_cover from "./../assets/images/pluto_cover.webp"

function AudioPlayer({ audioUrls = [amireal,deux_mille,freak,journey], titles = ["AM I REAL ?","2001","FREAK MONSTER","Journey to Pluto"],
                       covers = [amireal_cover,deux_mille_cover,freak_cover,journey_cover] }) {
    const containerRef = useRef(null);
    const wavesurfer = useRef(null);
    
    // Index du son actuellement joué
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);

    // Données du son actuel
    const currentAudio = audioUrls[currentIndex];
    const currentTitle = titles[currentIndex] || "Sans titre";
    const currentCover = covers[currentIndex];

    useEffect(() => {
        if (!containerRef.current || !currentAudio) return;

        // Création de l'instance WaveSurfer
        wavesurfer.current = WaveSurfer.create({
            container: containerRef.current,
            waveColor: '#cbd5e1',     // Slate-300
            progressColor: '#9333ea', // Purple-600
            cursorColor: '#7e22ce',
            barWidth: 3,
            barRadius: 3,
            barGap: 2,
            height: 80,
            url: currentAudio,
        });

        // Appliquer le volume
        wavesurfer.current.setVolume(volume);

        // Si on change de piste pendant que ça jouait, lancer la nouvelle automatiquement
        wavesurfer.current.on('ready', () => {
            if (isPlaying) {
                wavesurfer.current.play();
            }
        });

        // Passage automatique au son suivant à la fin du morceau
        wavesurfer.current.on('finish', () => {
            handleNext();
        });

        // Nettoyage au démontage ou changement de source
        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy();
            }
        };
    }, [currentIndex, currentAudio]); // Recharge WaveSurfer quand l'index change

    // Play / Pause
    const togglePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            setIsPlaying(!isPlaying);
        }
    };

    // Son Suivant (Skip Next)
    const handleNext = () => {
        if (audioUrls.length <= 1) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % audioUrls.length);
    };

    // Son Précédent (Skip Previous)
    const handlePrevious = () => {
        if (audioUrls.length <= 1) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + audioUrls.length) % audioUrls.length);
    };

    // Réglage du volume
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (wavesurfer.current) {
            wavesurfer.current.setVolume(newVolume);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-[80%] w-[50%] mx-auto my-6">
            
            {/* Header avec Titre, Pochette et Compteur */}
            <div className="flex flex-col items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    Piste {currentIndex + 1} / {audioUrls.length}
                </span>
                <h4 className="font-serif-display text-2xl font-bold text-gray-800 text-center">
                    {currentTitle}
                </h4>
                {currentCover && (
                    <img 
                        className='w-100 h-100 object-cover rounded-lg shadow-md border-2 border-gray-100' 
                        src={currentCover} 
                        alt={`Pochette de ${currentTitle}`}
                    />
                )}
            </div>

            {/* Onde sonore WaveSurfer */}
            <div ref={containerRef} className="w-full mb-6 cursor-pointer" />

            {/* Barre de contrôles (Précédent, Play/Pause, Suivant + Volume) */}
            <div className="flex flex-wrap items-center justify-center gap-4 px-2">
                <div className='w-1/3'></div>
                {/* Contrôles de lecture */}
                <div className="flex items-center gap-3 w-1/3">
                    {/* Bouton Précédent */}
                    <button
                        onClick={handlePrevious}
                        className="p-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                        title="Son précédent"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                        </svg>
                    </button>

                    {/* Bouton Play / Pause */}
                    <button
                        onClick={togglePlay}
                        className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center cursor-pointer"
                        aria-label={isPlaying ? "Pause" : "Lecture"}
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                <path d="M6 5h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm9 0h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                <path d="M8.5 5.14v13.72c0 .94 1.03 1.5 1.82.98l10.28-6.86c.74-.5.74-1.57 0-2.06L10.32 4.16c-.79-.52-1.82.04-1.82.98z" />
                            </svg>
                        )}
                    </button>

                    {/* Bouton Suivant */}
                    <button
                        onClick={handleNext}
                        className="p-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                        title="Son suivant"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                        </svg>
                    </button>
                </div>

                {/* Conteneur Volume (Slider) */}
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-inner max-w-[180px] w-1/3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="text-gray-500 flex-shrink-0" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-1.5 accent-purple-600 bg-gray-200 rounded-lg cursor-pointer appearance-none"
                    />
                </div>

            </div>
        </div>
    );
}

export default AudioPlayer;