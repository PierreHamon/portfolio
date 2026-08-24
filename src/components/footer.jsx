import GitHub_logo from "./../assets/icons/GitHub_Invertocat_Black_Clearspace.png"
import Linkedin_logo from "./../assets/icons/linkedin_logo.png"
import Tel_logo from "./../assets/icons/tel_logo.png"
import Email_logo from "./../assets/icons/email_logo.png"
import ElementList from "./ElementList"

function Footer() {
  return (
    <>
    <footer className="bg-grey-bg mt-30">
        <div className="flex flex-row justify-between mx-70 pt-7 pb-15">{/* Navigation */}
          <div>
            <h3 className="text-3xl font-serif-display mb-2">Navigation</h3>
            <div className="flex flex-row">
              <ul className="me-5">
                <ElementList name="Accueil" />
                <ElementList name="Présentation" />
                <ElementList name="Compétences" />
                <ElementList name="Projets" />
              </ul>
              <ul>
                <ElementList name="Parcours" />
                <ElementList name="Passions" />
                <ElementList name="Curriculum vitae" />
                <ElementList name="Contact" />
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">{/* Réseaux */}
            <h3 className="text-3xl font-serif-display mb-2">Réseaux</h3>
            <div className="flex flex-row items-center gap-2">
              <a href="https://github.com/PierreHamon" target="_blank" rel="noopener noreferrer"><img src={GitHub_logo} alt="logo github" className="w-12.5"/></a>
              <a href="https://www.linkedin.com/in/pierre-hamon-62059a269/" target="_blank" rel="noopener noreferrer"><img src={Linkedin_logo} alt="logo github" className="w-12.5"/></a>
              <a href="tel:+330767007918"><img src={Tel_logo} alt="logo github" className="w-12.5"/></a>
              <a href="mailto:pierrehmn1@gmail.com"><img src={Email_logo} alt="logo github" className="w-12.5"/></a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">{/* Stack utilisé pour le site */}
          <p className="font-open-sans text-center">Conçu et développé par <em>Pierre HAMON</em>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-4 h-4 text-red-500 inline-block"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <br/> avec <a href="https://fr.react.dev/" target="_blank" rel="noopener noreferrer" className="font-bold">React, </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="font-bold">Tailwind CSS, </a>
          <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="font-bold">Vite,</a>
          <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" className="font-bold"> Web3Forms</a> et
          <a href="https://www.framer.com/dictionary/framer-motion" target="_blank" rel="noopener noreferrer" className="font-bold"> Framer Motion</a>
          </p>
        </div>
    </footer>
    </>
  )
}

export default Footer