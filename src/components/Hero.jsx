import photoMoi from './../assets/images/photo_profil.jpeg';
import BadgeReseaux from './BadgeReseaux';
import GitHub_logo from "./../assets/icons/GitHub_Invertocat_Black_Clearspace.png"
import Linkedin_logo from "./../assets/icons/linkedin_logo.png"
import Tel_logo from "./../assets/icons/tel_logo.png"
import Email_logo from "./../assets/icons/email_logo.png"

function Hero() {
  return (
    <>
      <section id="presentation" className="flex flex-col-reverse items-center md:flex-row bg-background-second mt-5 pt-22 md:pt-10 pb-10 ps-[10%] pe-[5%] justify-between">
        <div className='flex flex-col items-center md:items-start'>
          <h1 className="bg-linear-to-r from-violet-500 via-violet-600 to-blue-900 bg-clip-text text-transparent font-serif-display text-5xl md:text-8xl">
            Pierre Hamon
          </h1>
          <h3 className="font-space-grotesk text-purple-second font-bold text-xl mx-5 mb-2 md:text-3xl">Développeur d'applications</h3>
          <div className="flex items-center gap-2 mt-2">
            {/* Ton texte */}
            <p className='text-center font-open-sans ms-5 me-1 font-bold text-xl'>
              Recherche un poste de développeur d’application sur Nantes/Rennes
            </p>
            {/* Diode verte animée */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            </span>
          </div>
          <div className='mx-5 mt-2 flex justify-center md:justify-baseline gap-5'>
             <BadgeReseaux logo={GitHub_logo} link="https://github.com/PierreHamon" nom="Github"/>
            <BadgeReseaux logo={Linkedin_logo} link="https://www.linkedin.com/in/pierre-hamon-62059a269/" nom="LinkedIn"/>
            <BadgeReseaux logo={Tel_logo} link="tel:+330767007918" nom="Telephone"/>
            <BadgeReseaux logo={Email_logo} link="mailto:pierrehmn1@gmail.com" nom="pierrehmn1@gmail.com"/>
          </div>
           
            
          
        </div>
        <img src={photoMoi} alt="photo de moi-même" className='w-55 md:w-100 h-auto rounded-full'/>
      </section>
    </>
  )
}



export default Hero