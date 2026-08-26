import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

function AudioPlayer({ audioUrl, title, cover }) {
    const containerRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Initialisation de WaveSurfer
        wavesurfer.current = WaveSurfer.create({
            container: containerRef.current,
            waveColor: '#cbd5e1',     // Couleur de l'onde inactive (slate-300)
            progressColor: '#9333ea', // Couleur de lecture (purple-600)
            cursorColor: '#7e22ce',   // Couleur du curseur
            barWidth: 3,              // Largeur des barres
            barRadius: 3,             // Coins arrondis des barres
            barGap: 2,                // Espace entre les barres
            height: 80,               // Hauteur du canevas en px
            url: audioUrl,
        });

        // Gestion de la fin de lecture
        wavesurfer.current.on('finish', () => {
            setIsPlaying(false);
        });

        // Nettoyage à la destruction du composant
        return () => {
            wavesurfer.current.destroy();
        };
    }, [audioUrl]);

    // Fonction Play / Pause
    const togglePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-[80%] w-full mx-auto my-4">
            <h4 className="text-center font-serif-display text-xl font-bold mb-4 text-gray-800">{title}</h4>
            
            <img className='w-70 flex' src={cover} alt="pochette du son"/>

            {/* Zone où s'affiche l'onde sonore */}
            <div ref={containerRef} className="w-full mb-4 cursor-pointer" />

            {/* Bouton de contrôle */}
            <button
                onClick={togglePlay}
                className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
                {isPlaying ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M6 5h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm9 0h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" />
                        </svg>

                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M8.5 5.14v13.72c0 .94 1.03 1.5 1.82.98l10.28-6.86c.74-.5.74-1.57 0-2.06L10.32 4.16c-.79-.52-1.82.04-1.82.98z" />
                        </svg>

                    </>
                )}
            </button>
        </div>
    );
}

export default AudioPlayer;