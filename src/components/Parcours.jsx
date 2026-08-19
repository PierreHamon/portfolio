import logo_callo from "./../assets/icons/logo_marcelcallo.png"
import logo_iut from "./../assets/icons/logo_iut_lannion.webp"
import logo_cil from "./../assets/icons/logo_cil.webp"
import ElementParcours from "./ElementParcours"

function Parcours() {
  return (
    <>
        <section id="parcours">
          <div className="flex justify-center items-center py-5">
            <h1 className="title-primary">Parcours</h1>
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
                className="lucide lucide-graduation-cap-clean shrink-0 text-neutral-800">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M6 12.5v4.5c0 2 2 3 6 3s6-1 6-3v-4.5" />
                <path d="M21.4 11.5v6.5" />
            </svg>
          </div>
          <div>
            <ElementParcours titre="Lycée Marcel callo" dates="2019 - 2022"
              sousTitre="BAC Maths et NSI option européenne"
              texte="J'ai été étudiant au lycée Marcel callo à Redon (35600), où j'ai
                    décroché mon BAC spécialité Math et NSI mention bien et européenne."
              image={logo_callo}/>

            <ElementParcours titre="Iut de Lannion" dates="2022 - 2025"
              sousTitre="BUT informatique en alternance"
              texte="J'ai été étudiant à l'IUT de Lannion (22300), j'y ai obtenu mon BUT informatique parcours développement d'applications mention bien.
                      Ma deuxième et troisième année on été faites en alternance au Centre Informatique de Lamballe (CIL)."
              image={logo_iut}
              reverse="true"/>  
            
            <ElementParcours titre="Alternance CIL" dates="2023 - 2025"
              sousTitre="Développeur IBM i"
              texte="Lors de mon alternance j'ai été apprenti développeur IBM i au sein du CIL, j'y fais quelques tâches simples d'abord
              puis au fur et à mesures des projets plus conséquents."
              image={logo_cil}/>
          </div>
        </section>
    </>
  )
}



export default Parcours
