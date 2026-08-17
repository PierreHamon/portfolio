function Header() {
  return (
    <header id="header" className="font-open-sans font-bold w-full mt-5 relative flex items-center justify-center md:justify-between">
      <div></div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-fit bg-white-menu shadow-sm rounded-lg items-center shrink-0">
        <a href="#accueil" className="hover:bg-grey-bg p-2 px-5">Accueil</a>
        <a href="#competences" className="hover:bg-grey-bg p-2 px-5">Compétences</a>
        <a href="#projets" className="hover:bg-grey-bg p-2 px-5">Projets</a>
        <a href="#parcours" className="hover:bg-grey-bg p-2 px-5">Parcours</a>
        <a href="#passions" className="hover:bg-grey-bg p-2 px-5">Passions</a>
        <a href="#curriculum vitae" className="hover:bg-grey-bg p-2 px-5">CV</a>
        <a href="#contact" className="hover:bg-grey-bg p-2 px-5">Contact</a>
      </nav>

      <div>
        <a href="" className="flex bg-white-menu p-2 px-5 mx-6 items-center justify-center shadow-sm rounded-lg hover:bg-grey-bg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-icon lucide-sun">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
          </svg>
        </a>
      </div>
      
    </header>
  )
}

export default Header