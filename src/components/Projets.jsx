import p4screen from './../assets/images/puissance4_screen.png'; 
import EspaceProjet from './EspaceProjet';
import cil_projet from './../assets/images/cil_project.avif';
import transmusicales_projet from './../assets/images/transmusicales_project.avif';
import parcoursup_projet from './../assets/images/parcoursup_project.avif';
import chevaux_projet from './../assets/images/chevaux_project.png';
import location_projet from './../assets/images/location_project.avif';
import nas_projet from './../assets/images/nas_project.png';
import portfolio_projet from './../assets/images/portfolio_project.webp';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { PROJECTS_DATA } from '../data/Data';

function Projets() {
    const [selectedProject,SetSelectedProject] = useState(null);
  return (
    <>
    <section id="projets" className='scroll-mt-[7vh] md:scroll-mt-[0vh]'>
        <div className="flex justify-center items-center py-5 ">
            <h1 className="title-primary">Projets</h1>
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
            className="shrink-0 text-text"
            >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
                <path d="M12 6v10l3-3 3 3V6H12z" />
            </svg>

        </div>
        <div className='flex flex-row flex-wrap justify-center'>
            {PROJECTS_DATA.map((projet) => (
                <EspaceProjet
                    key={projet.id}
                    {...projet}
                    onOpen={() => SetSelectedProject(projet)}
                />
            ))}
        </div>
        <ProjectModal
            project={selectedProject} 
            onClose={() => SetSelectedProject(null)}
        />
    </section>
    </>
  )
}



export default Projets