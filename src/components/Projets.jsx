import p4screen from './../assets/images/puissance4_screen.avif'; 
import EspaceProjet from './EspaceProjet';

function Projets() {
    const Projet1 = {
    titre: "Puissance 4 automatique",
    soustitre: "En groupe à l'IUT",
    description: "Réalisation en duo en première année de BUT d'un puissance 4 en C avec affichage dans le terminal linux, le jeu est une version optimiser du jeu de base se jouant tout seul. Cette fois il joue de façon automatique avec différentes stratégies plus ou moins avancées.",
    imageprojet: p4screen,
    inverse: false,
    techno : ["C"]
    };
    const Projet2 = {
    titre: "Modification de la gestion de commande adhérant et fournisseur",
    soustitre: "En alternance en solo",
    description: "Le projet d'entreprise est une demande de la part d'une cliente qui demande à changer l'interface de la gestion de commande adhérant et fournisseur sur IBM i. Ces interfaces sont des tableaux j'ai eu par exemple à supprimer des colonnes, en renommées, ou bien encore ajouter des fonctionnalités comme un export Excel ou une touche qui permet de voir la commande associé à un article particulier.",
    imageprojet: p4screen,
    inverse: true,
    techno : ["RPG", "SQL DB2"]
    };
    const Projet3 = {
    titre: "Automatisation intégration RPD",
    soustitre: "En alternance en solo",
    description: "Ce projet d'entreprise consiste à analyser et élaborer un plan pour arriver à rendre autonome les clients dans l'intégration de la redevance pour pollution diffuse qui aujourd'hui est faite par le CIL. Cela permettra d’alléger la charge de travail du CIL.",
    imageprojet: p4screen,
    inverse: false,
    techno : ["RPG", "SQL DB2"]
    };
    const Projet4 = {
    titre: "Création d'une base de donnée pour les transmusicales",
    soustitre: "En groupe à l'IUT",
    description: "Le projet d'IUT consiste à créer une base de donnée complète pour le festival les Trans musicales en SQL avec analyse préalable.",
    imageprojet: p4screen,
    inverse: true,
    techno : ["SQL"]
    };
    const Projet5 = {
    titre: "Création et exploitation d'une base de données Parcoursup",
    soustitre: "En groupe à l'IUT",
    description: "Ce projet réalisé à l'IUT en duo consiste à créer et exploiter une base de donnée Parcoursup complète puis analyser celle-ci avec une régression linéaire en python pour trouver des corrélations entre des variables et prédire certaines.",
    imageprojet: p4screen,
    inverse: false,
    techno : ["Python", "SQL"]
    };
    const Projet6 = {
    titre: "Interface Homme Machine pour Petits Chevaux",
    soustitre: "En groupe à l'IUT",
    description: "Le projet d'IUT consiste à réaliser par groupe de 3 une IHM en Javafx pour un hôtel fictif nommé Petits Chevaux. Cela comprend divers fonctionnalités comme : la liste des arrivés prévues, créer une prestation (par exemple un achat de consommable) et afficher la liste des prestations servies par type de  prestations sur une période.",
    imageprojet: p4screen,
    inverse: true,
    techno : ["JavaFX"]
    };
    const Projet7 = {
    titre: "Réalisation d’une Plateforme de Location Saisonnière",
    soustitre: "En groupe à l'IUT",
    description: "Réalisation à l'IUT d'un site de location saisonnier en Bretagne nommé ALHaIZ Breizh avec un échange avec le client, une équipe réaliste composée notamment d'un Product Owner, d'un Scrum Master et de développeur (j'étais développeur). Le tout sur 6 semaines, 2 de préparation et ensuite 2 sprints de 2semaines.",
    imageprojet: p4screen,
    inverse: false,
    techno : ["JavaScript", "HTML", "CSS", "GitHub"]
    };
    const Projet8 = {
    titre: "Mise en place d'un NAS",
    soustitre: "Projet personnel",
    description: "Recyclage de mon ancien PC en NAS à l'aide tout d'abord de Truenas puis proxmox sur lequel j'ai directement migré truenas dans une VM et une autre en passtrough pour brancher une télévision directement sur mon NAS et voir mes films sauvegardés dessus. Je me sers de ce NAS pour sauvargdé toutes mes photos (Immich), mes films (Jellyfin), hebergé mon propre google drive (Nextcloud), mon home assistant et mon propre propre contrôle DNS (pihole). Je peux également y accéder depuis n'importe où avec Tailscale",
    imageprojet: p4screen,
    inverse: true,
    techno : ["Truenas scale", "Proxmox", "Tailscale"]
    };
    const Projet9 = {
    titre: "Site portfolio",
    soustitre: "Projet personnel",
    description: "Réalisation d'une maquette figma puis d'un site portfolio personnel responsive et plus en phase avec mes goûts que le site précédent tout en permettant de montrer mes compétences en front-end.",
    imageprojet: p4screen,
    inverse: false,
    techno : ["Figma", "React", "Tailwind CSS", "Vue", "web3forms", "HTML5", "CSS3", "JavaScipt ES6+"]
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
        <EspaceProjet {...Projet5}/>
        <EspaceProjet {...Projet6}/>
        <EspaceProjet {...Projet7}/>
        <EspaceProjet {...Projet8}/>
        <EspaceProjet {...Projet9}/>
        
           
    </section>
    </>
  )
}



export default Projets