import logo_callo from "./../assets/icons/logo_marcelcallo.png"
import logo_iut from "./../assets/icons/logo_iut_lannion.webp"
import logo_cil from "./../assets/icons/logo_cil.webp"

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
            <div className="flex justify-center timeline-line">
              <div className="w-1/2 flex bg-white rounded-xl max-w-2xl mb-5 p-5 gap-10 h-full items-center ">
                <div>
                  <h2 className="font-serif-display text-4xl">
                  Lycée Marcel callo
                  </h2>
                  <h3 className="font-space-grotesk text-xl text-purple-second font-bold ps-3">
                      BAC Maths et NSI option européenne
                  </h3>
                  <p className="font-open-sans text-lg text-justify max-w-2xl">
                      Dans un environnement où [citer un défi du secteur, ex: la gestion des données
                      devient complexe], l'entreprise [Nom de l'entreprise ou cible] fait face à
                      [décrire le problème, ex: une perte de temps lors du traitement manuel des factures]
                      . Ce manque d'automatisation entraîne [conséquence négative : erreurs, coûts élevés lenteur].
                  </p>
                </div>
                <img src={logo_callo} alt='logo du lycée marcel callo à Redon' className="w-60 h-55"/>
              </div>
              <div className="timeline-point">
              </div>
              <div className="w-1/2">
              </div>
            </div>

            <div className="flex flex-row-reverse justify-center timeline-line">
              <div className="w-1/2 flex bg-white rounded-xl max-w-2xl mx-auto mb-5 p-5 gap-10 h-full items-center before:absolute before:left-1/2 before:bg-purple-second">
                <div>
                  <h2 className="font-serif-display text-4xl">
                  Iut de Lannion
                  </h2>
                  <h3 className="font-space-grotesk text-xl text-purple-second font-bold ps-3">
                      BUT informatique en alternance
                  </h3>
                  <p className="font-open-sans text-lg text-justify max-w-2xl">
                      Dans un environnement où [citer un défi du secteur, ex: la gestion des données devient
                      complexe], l'entreprise [Nom de l'entreprise ou cible] fait face à [décrire le
                      problème, ex: une perte de temps lors du traitement manuel des factures]. Ce manque
                      d'automatisation entraîne [conséquence négative : erreurs, coûts élevés, lenteur].
                  </p>
                </div>
                <img src={logo_iut} alt='logo du lycée marcel callo à Redon' className="w-50"/>
              </div>
              <div className="timeline-point">
              </div>
              <div className="w-1/2">
              </div>
            </div>

            <div className="flex justify-center timeline-line">
              <div className="w-1/2 flex bg-white rounded-xl max-w-2xl mx-auto mb-5 p-5 gap-10 h-full items-center before:absolute before:left-1/2 before:bg-purple-second">
                <div>
                  <h2 className="font-serif-display text-4xl">
                  Alternance CIL
                  </h2>
                  <h3 className="font-space-grotesk text-xl text-purple-second font-bold ps-3">
                      Développeur IBM i
                  </h3>
                  <p className="font-open-sans text-lg text-justify max-w-2xl">
                      Dans un environnement où [citer un défi du secteur, ex: la gestion des données devient
                      complexe], l'entreprise [Nom de l'entreprise ou cible] fait face à [décrire le
                      problème, ex: une perte de temps lors du traitement manuel des factures]. Ce manque
                      d'automatisation entraîne [conséquence négative : erreurs, coûts élevés, lenteur].
                  </p>
                </div>
                <img src={logo_cil} alt='logo du lycée marcel callo à Redon' className="w-50"/>
              </div>
              <div className="timeline-point">
              </div>
              <div className="w-1/2">
              </div>
            </div>

          </div>
            
        </section>
    </>
  )
}



export default Parcours
