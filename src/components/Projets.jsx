import p4screen from './../assets/images/puissance4_screen.avif'; 
import EspaceProjet from './EspaceProjet';

function Projets() {
    const Projet1 = {
    titre: "Puissance 4 automatique",
    soustitre: "En groupe à l'IUT",
    description: "Réalisation en duo en première année de BUT d'un puissance 4 en C avec affichage dans le terminal linux, le jeu est une version optimiser du jeu de base se jouant tout seul. Cette fois il joue de façon automatique avec différentes stratégies plus ou moins avancées.",
    imageprojet: p4screen,
    inverse: false
    };
    const Projet2 = {
    titre: "Modification de la gestion de commande adhérant et fournisseur",
    soustitre: "En alternance en solo",
    description: "Le projet d'entreprise est une demande de la part d'une cliente qui demande à changer l'interface de la gestion de commande adhérant et fournisseur sur IBM i. Ces interfaces sont des tableaux j'ai eu par exemple à supprimer des colonnes, en renommées, ou bien encore ajouter des fonctionnalités comme un export Excel ou une touche qui permet de voir la commande associé à un article particulier.",
    imageprojet: p4screen,
    inverse: true
    };
    const Projet3 = {
    titre: "Automatisation intégration RPD",
    soustitre: "En alternance en solo",
    description: "Ce projet d'entreprise consiste à analyser et élaborer un plan pour arriver à rendre autonome les clients dans l'intégration de la redevance pour pollution diffuse qui aujourd'hui est faite par le CIL. Cela permettra d’alléger la charge de travail du CIL.",
    imageprojet: p4screen,
    inverse: false
    };
    const Projet4 = {
    titre: "Réalisation d’une Plateforme de Location Saisonnière",
    soustitre: "En groupe à l'IUT",
    description: "Réalisation à l'IUT d'un site de location saisonnier en Bretagne nommé ALHaIZ Breizh avec un échange avec le client, une équipe réaliste composée notamment d'un Product Owner, d'un Scrum Master et de développeur (j'étais développeur). Le tout sur 6 semaines, 2 de préparation et ensuite 2 sprints de 2semaines.",
    imageprojet: p4screen,
    inverse: true
    };
  return (
    <>
    <section id="projets">
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
            className="lucide lucide-folder-bookmark shrink-0 text-neutral-800"
            >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
                <path d="M12 6v10l3-3 3 3V6H12z" />
            </svg>

        </div>

        <EspaceProjet {...Projet1}/>
        <EspaceProjet {...Projet2}/>
        <EspaceProjet {...Projet3}/>
        <EspaceProjet {...Projet4}/>
           
    </section>
    </>
  )
}



export default Projets