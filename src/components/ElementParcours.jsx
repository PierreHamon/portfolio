function ElementParcours(props) {
  return (
    <>
        <div className={`flex justify-center timeline-line ${props.reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-1/2 flex bg-white rounded-xl max-w-2xl mb-5 p-5 gap-10 h-full items-center ">
                <div>
                    <div className="flex flex-row items-baseline gap-2">
                        <h2 className="font-serif-display text-4xl">
                            {props.titre} 
                        </h2>
                        <h3 className="font-open-sans font-bold">{props.dates}</h3>
                    </div>
                    <h3 className="font-space-grotesk text-xl text-purple-second font-bold ps-3">
                        {props.sousTitre}
                    </h3>
                    <p className="font-open-sans text-lg text-justify max-w-2xl">
                        {props.texte}
                    </p>
                </div>
                <img src={props.image} alt='logo du lycée marcel callo à Redon' className="w-60 h-55"/>
            </div>
            <div className="timeline-point">
            </div>
            <div className="w-1/2">
            </div>
        </div>
    </>
  )
}

export default ElementParcours;