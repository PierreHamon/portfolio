import cil_projet from '../assets/images/cil_project.avif';
import location_projet from '../assets/images/location_project.avif';
import nas_projet from '../assets/images/nas_project.png';
import portfolio_projet from '../assets/images/portfolio_project.webp';

export const PROJECTS_DATA = [
  {
    id: 'projet-1',
    titre: "Modification de la gestion de commande adhérent et fournisseur",
    soustitre: "En alternance en solo",
    description: "Le projet d'entreprise est une demande de la part d'une cliente qui demande à changer l'interface de la gestion de commande adhérent et fournisseur sur IBM i. Ces interfaces sont des tableaux. J'ai eu par exemple à supprimer des colonnes, à en renommer, ou bien encore à ajouter des fonctionnalités comme un export Excel ou une touche qui permet de voir la commande associée à un article particulier.",
    imageprojet: cil_projet,
    techno: ["RPG", "SQL DB2"],
    etapes: ["Définition des besoins clients avec un entretien","Développement des différentes fonctionnalités","Test par ma cheffe de projet jusqu'à avoir développé toutes les fonctionnalités définis dans l'entretien"]
  },
  {
    id: 'projet-2',
    titre: "Automatisation intégration RPD",
    soustitre: "En alternance en solo",
    description: "Ce projet d'entreprise consiste à analyser et élaborer un plan pour arriver à rendre autonomes les clients dans l'intégration de la redevance pour pollution diffuse qui, aujourd'hui, est faite par le CIL. Cela permettra d’alléger la charge de travail du CIL.",
    imageprojet: cil_projet,
    techno: ["RPG", "SQL DB2"],
    etapes: ["Analyse, déterminer la marche à suivre","Faire valider mon plan à ma cheffe d'équipe","Développer et faire tester chaque fonctionnalités","Faire une documentation claire pour les clients qui utiliserons ce programme"]
  },
  {
    id: 'projet-3',
    titre: "Réalisation d’une plateforme de location saisonnière",
    soustitre: "En groupe à l'IUT",
    description: "Réalisation en groupe de 6 à l'IUT d'un site de location saisonnière en Bretagne nommé ALHaIZ Breizh avec un échange avec le client, une équipe réaliste composée notamment d'un Product Owner, d'un Scrum Master et de développeurs (j'étais développeur). Le tout sur 6 semaines, 2 de préparation et ensuite 2 sprints de 2 semaines.",
    imageprojet: location_projet,
    techno: ["JavaScript", "HTML", "CSS", "GitHub"],
    etapes: ["Analyse, estimation et micro-conception","​Conception, développement et test de l'application (encadré avec des professeurs et autonomie)","Soutenance de présentation sous forme de review avec les clients"]
  },
  {
    id: 'projet-4',
    titre: "Mise en place d'un NAS",
    soustitre: "Projet personnel",
    description: "Recyclage de mon ancien PC en NAS à l'aide de Proxmox et TrueNAS sur lequel j'ai directement migré TrueNAS dans une VM et une autre en passthrough pour brancher une télévision directement sur mon NAS et voir mes films sauvegardés dessus. J'utilise ce NAS pour sauvgarder toutes mes photos (Immich), mes films (Jellyfin), héberger mon propre Google drive (Nextcloud), mon Home Assistant et mon propre contrôle DNS (Pi-hole). Je peux également y accéder depuis n'importe où avec Tailscale.",
    imageprojet: nas_projet,
    techno: ["TrueNAS scale", "Proxmox", "Tailscale"],
    etapes: ["Récupération des données de l'ancien PC sur un disque dur externe","Installation de Proxmox","Mise en place d'une VM TrueNAS","Installation des différents applications comme Immich, NextCloud, Pihole etc... sur la VM", "Création d'une autre VM sous Ubuntu en y assignant mon GPU en passtrough"]
  },
  {
    id: 'projet-5',
    titre: "Site portfolio",
    soustitre: "Projet personnel",
    description: "Réalisation d'une maquette Figma puis d'un site portfolio personnel responsive et plus en phase avec mes goûts que le site précédent tout en permettant de montrer mes compétences en front-end.",
    imageprojet: portfolio_projet,
    techno: ["Figma", "React", "Tailwind CSS", "Web3forms", "Framer Motion", "HTML5", "CSS3", "JavaScript ES6+"],
    etapes: ["Trouver des inspirations","Faire une maquette figma détaillée mais pas fixe", "Création du projet React + Tailwind CSS et GitHUB", "Développement de la base du site desktop et responsive", "Implémentation des animations Framer motion", "Ajout du dark mode", "Ajout de détails comme l'état d'avancement, bandeau des réseaux dans la section hero, refonte de la section projet etc..."],
    source: "https://github.com/PierreHamon/portfolio"
  }
];