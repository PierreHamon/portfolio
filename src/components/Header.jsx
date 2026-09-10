import { useEffect } from "react";
import { useState } from "react";

function Header() {
  return (
    <header id="header" className="flex items-center justify-between font-open-sans font-bold w-full mt-0 md:mt-5 relative ">
      <div></div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-fit bg-white-menu shadow-sm rounded-lg items-center shrink-0">
        <a href="#accueil" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Accueil</a>
        <a href="#competences" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Compétences</a>
        <a href="#projets" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Projets</a>
        <a href="#parcours" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Parcours</a>
        <a href="#passions" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Passions</a>
        <a href="#curriculum vitae" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">CV</a>
        <a href="#contact" className="hover:bg-grey-bg hover:text-purple-second p-2 px-5">Contact</a>
      </nav>
      
    </header>
  )
}

export default Header