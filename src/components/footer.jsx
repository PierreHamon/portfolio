import GitHub_logo from "./../assets/icons/GitHub_Invertocat_Black_Clearspace.png"
import Linkedin_logo from "./../assets/icons/linkedin_logo.png"
import Tel_logo from "./../assets/icons/tel_logo.png"
import Email_logo from "./../assets/icons/email_logo.png"

function Footer() {
  return (
    <>
    <footer className="bg-grey-bg">
        <div className="flex flex-row justify-between mx-70 pt-7 pb-15">{/* Navigation */}
          <div>
            <h3 className="text-3xl font-serif-display">Navigation</h3>
            <div className="flex flex-row">
              <ul className="me-5">
                <li className="font-open-sans">Accueil</li>
                <li className="font-open-sans">Présentation</li>
                <li className="font-open-sans">Compétences</li>
                <li className="font-open-sans">Projets</li>
              </ul>
              <ul>
                <li className="font-open-sans">Parcours</li>
                <li className="font-open-sans">Passions</li>
                <li className="font-open-sans">Curriculum vitae</li>
                <li className="font-open-sans">Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">{/* Réseaux */}
            <h3 className="text-3xl font-serif-display">Réseaux</h3>
            <div className="flex flex-row items-center gap-2">
              <a href="https://github.com/PierreHamon"><img src={GitHub_logo} alt="logo github" className="w-12.5"/></a>
              <a href="https://www.linkedin.com/in/pierre-hamon-62059a269/"><img src={Linkedin_logo} alt="logo github" className="w-12.5"/></a>
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
          <br/> avec <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Vite</strong> et <strong>Web3Forms</strong></p>
        </div>
    </footer>
    </>
  )
}

export default Footer