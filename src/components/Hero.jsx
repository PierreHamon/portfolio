import photoMoi from './../assets/images/photo_portfolio.jpg';

function Hero() {
  return (
    <>
<section className="flex flex-col-reverse items-center md:flex-row bg-grey-bg mt-5 pt-5 md:pt-10 pb-10 ps-[10%] pe-[5%] justify-between">          <div className='flex flex-col items-center md:items-start'>
            <h1 className="font-serif-display text-5xl md:text-8xl">
                Pierre Hamon
            </h1>
            <h3 className="font-space-grotesk text-purple-second font-bold text-xl md:mx-5 text-3xl">Développeur d'applications</h3>
          </div>
            <img src={photoMoi} alt="photo de moi-même" className='w-55 md:w-100 h-auto rounded-full'/>
            
        </section>
    </>
  )
}



export default Hero