import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [isMenuOpen,SetIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
    useEffect(() => {
      const root = document.documentElement;

      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [isDark]);

 

  return (
    <header id="header" className="flex items-center justify-between font-open-sans font-bold w-full mt-0 md:mt-5 relative ">
      <div className="fixed border-b-1 border-border md:border-0 md:relative top-0 py-2 flex flex-row w-full bg-background md:w-full justify-between cursor-pointer z-50">
      <div className="order-2 md:order-1 flex gap-2 mx-6 items-center bg-white-menu shadow-sm shadow-shadow rounded-lg p-2">
        {/* Ton texte */}
        <p className='font-open-sans me-1 text-base'>
          V 1.0 - En cours d'amélioration
        </p>
        {/* Diode verte animée */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_8px_#22c55e]"></span>
        </span>
      </div>
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-fit bg-white-menu shadow-sm shadow-shadow rounded-lg items-center shrink-0">
        <a href="#accueil" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Accueil</a>
        <a href="#competences" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Compétences</a>
        <a href="#projets" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Projets</a>
        <a href="#parcours" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Parcours</a>
        <a href="#passions" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Passions</a>
        <a href="#curriculum vitae" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">CV</a>
        <a href="#contact" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Contact</a>
      </nav>
        <a onClick={(e) => {
          e.preventDefault(); // Empêche la page de remonter tout en haut
          setIsDark(!isDark);
          }}
        className="order-1 md:order-3 flex items-center bg-white-menu p-2 px-5 mx-6 md:shadow-sm shadow-shadow rounded-lg hover:bg-grey-bg hover:text-purple-second"
        >
          {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
          </svg>
        ):(
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="black" 
            stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
        </a>
        <i className="order-3 flex md:hidden p-2 px-5 mx-6 text-text"
           onClick={() => SetIsMenuOpen(!isMenuOpen)}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="2em" 
            height="2em" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </i>
        
        <div className={`fixed md:hidden top-15 py-5 left-0 w-full bg-background flex flex-col items-center
            transform transition-transform
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <ul className="flex flex-col items-start gap-6">
            <li className="flex flex-row">
              <a className="flex flex-row gap-2"
                 onClick={() => {
                  scrollToTop();
                  SetIsMenuOpen(!isMenuOpen)
                 }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <path d="M3 10.5L10.65 3.8a2 2 0 0 1 2.7 0L21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5z" />
                  <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
                </svg>
                Accueil
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#competences" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="shrink-0 text-text">
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <rect width="20" height="14" x="2" y="6" rx="3" />
                    <path d="M2 11s4 4 10 4 10-4 10-4" />
                    <circle cx="12" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
                Compétences
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#projets" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="shrink-0 text-text"
                >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
                <path d="M12 6v10l3-3 3 3V6H12z" />
                </svg>
                Projets
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#parcours" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-text'>
                  <path d="M2.2 10.4c-.6-.3-.6-1.1 0-1.4l9.1-4.8c.4-.2.9-.2 1.4 0l9.1 4.8c.6.3.6 1.1 0 1.4l-9.1 4.8c-.4.2-.9.2-1.4 0z" />
                  <path d="M6 12.5v4c0 2.2 2.7 4 6 4s6-1.8 6-4v-4" />
                  <path d="M21 10.8v6" />
                </svg>
                Parcours
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#passions" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='text-text'>
                  <rect x="3.5" y="10.5" width="17" height="9.5" rx="2" />
                  <path d="M3.5 10.5 L3.2 6.8 C3.1 5.7 3.9 4.8 5 4.6 L18.2 2.3 C19.3 2.1 20.3 2.9 20.5 4 L20.8 5.8 C21 6.9 20.2 7.9 19.1 8.1 L3.5 10.5 Z" />
                  <line x1="8.5" y1="9.7" x2="10" y2="3.8" />
                  <line x1="14" y1="8.8" x2="15.5" y2="2.8" />
                </svg>
                Passions
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#curriculum vitae" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='shrink-0 text-text'>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M6 20a6 6 0 0 1 12 0" />
                  </svg>
                CV
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex flex-row gap-2" href="#contact" onClick={() => SetIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="shrink-0 text-text"
                  >
                  <rect x="4" y="4" width="16" height="18" rx="3" ry="3" />
                  <line x1="8" y1="2" x2="8" y2="4" />
                  <line x1="16" y1="2" x2="16" y2="4" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M8 22v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1" />
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </header>
  )
}

export default Header