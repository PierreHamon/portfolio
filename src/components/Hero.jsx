import photoMoi from './../assets/images/photo_portfolio.jpg';

function Hero() {
  return (
    <>
  <section id="presentation" className="flex flex-col-reverse items-center md:flex-row bg-grey-bg mt-5 pt-5 md:pt-10 pb-10 ps-[10%] pe-[5%] justify-between">
    <div className='flex flex-col items-center md:items-start'>
      <h1 className="font-serif-display text-5xl md:text-8xl">
        Pierre Hamon
      </h1>
      <h3 className="font-space-grotesk text-purple-second font-bold text-xl mx-5 mb-2 md:text-3xl">Développeur d'applications</h3>
      <div className="flex items-center gap-2 mt-2">
        {/* Ton texte */}
        <p className='font-open-sans ms-5 me-1 font-bold text-xl'>
          Recherche un poste de développeur d’application sur Nantes/Rennes
        </p>
        {/* Diode verte animée */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
        </span>
      </div>
    </div>
    <img src={photoMoi} alt="photo de moi-même" className='w-55 md:w-100 h-auto rounded-full'/>
  </section>
    </>
  )
}



export default Hero