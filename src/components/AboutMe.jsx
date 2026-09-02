function AboutMe() {
  return (
    <>
    <section className="flex flex-col max-w-4xl mx-auto pt-7">
        <div className="flex flex-row items-center justify-center pb-3">
            <h1 className="title-primary">Qui suis-je ?</h1>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="3em" 
            height="3em" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-circle-help shrink-0 text-text"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        </div>
        <p className="font-open-sans text-lg text-justify">
            Je m’appel Pierre Hamon je suis diplomé d’un <span className="highlight-words">BUT informatique </span>parcours développement d'applications
            de l'IUT de Lannion réalisé <span className="highlight-words">en alternance</span> au Centre Informatique de Lamballe. J'ai pris une année
            sabatique en 2025 pour découvrir le monde et moi-même en voyageant, faisant des <span className="highlight-words">dizaines de projets</span> dans différents domaines.
        </p>
        
    </section>
    </>
  )
}



export default AboutMe