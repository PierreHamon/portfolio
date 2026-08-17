function ElementList(props) {
    const isHome = props.name.toLowerCase() === 'accueil'; //accueil a un comportement différent des autres liens
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // Pour un défilement fluide
        });
    };
    const targetId = props.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); 
    return (
    <>
    <li className="font-open-sans flex items-center group">
        {isHome ? (
            <button onClick={scrollToTop} className="flex items-center hover:text-purple-second cursor-pointer">
                <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Accueil
            </button>
            
        ):(
            <a href={`#${targetId}`} className="flex items-center hover:text-purple-second">
                <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {props.name}
            </a>
        )}
    </li>
    </>
  )
}

export default ElementList