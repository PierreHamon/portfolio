import html5 from './../assets/icons/html5.webp';
import css from './../assets/icons/css.png';
import Js from './../assets/icons/js.png';
import BadgeCompetences from './BadgeCompetences';
import Vue from './../assets/icons/vue-js-seeklogo.png';
import C from './../assets/icons/C_logo.png';
import PHP from './../assets/icons/php-seeklogo.png';
import Python from './../assets/icons/python-seeklogo.png';
import SQL from './../assets/icons/sql_logo.png';
import Github from './../assets/icons/GitHub_Invertocat_White.png';
import Bash from './../assets/icons/bash_logo.png';
import Docker from './../assets/icons/docker_logo.png';
import RPG from './../assets/icons/ibm_logo.png';
import Java from './../assets/icons/java_logo.png'
import React from './../assets/icons/react_logo.png'
import JavaFX from './../assets/icons/javafx_logo.png'

function Competences() {
  return (
    <>
    <section id="competences" className="flex flex-col max-w-7xl mx-auto pt-7 scroll-m-[50vh]">
        <div className="flex flex-row items-center justify-center pb-5">
            <h1 className="title-primary">Compétences</h1>
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
            className="lucide lucide-briefcase-custom shrink-0">
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <rect width="20" height="14" x="2" y="6" rx="3" />
                <path d="M2 11s4 4 10 4 10-4 10-4" />
                <circle cx="12" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        </div>
        <div className='flex gap-5 flex-wrap justify-center'>
            <BadgeCompetences nom="HTML5" logo={html5}/>
            <BadgeCompetences nom="CSS" logo={css}/>
            <BadgeCompetences nom="JavaScript" logo={Js}/>
            <BadgeCompetences nom="Vue" logo={Vue}/>
            <BadgeCompetences nom="C" logo={C}/>
            <BadgeCompetences nom="PHP" logo={PHP}/>
            <BadgeCompetences nom="Python" logo={Python}/>
            <BadgeCompetences nom="SQL" logo={SQL}/>
            <BadgeCompetences nom="Github" logo={Github}/>
            <BadgeCompetences nom="Bash" logo={Bash}/>
            <BadgeCompetences nom="Docker" logo={Docker}/>
            <BadgeCompetences nom="RPG" logo={RPG}/>
            <BadgeCompetences nom="Java" logo={Java}/>
            <BadgeCompetences nom="React" logo={React}/>
            <BadgeCompetences nom="JavaFX" logo={JavaFX}/>
        </div>
        
    </section>
    </>
  )
}



export default Competences