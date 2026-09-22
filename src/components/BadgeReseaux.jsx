function BadgeReseaux(props) {
  return (
    <>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-white px-4 py-2 rounded-xl shadow-md font-sans">
            <img src={props.logo} alt={`${props.logo}`} className='w-8'/>
            <span className="hidden md:flex text-xl text-text tracking-wide ">{props.nom}</span>
        </a>
    </>
  )
}



export default BadgeReseaux