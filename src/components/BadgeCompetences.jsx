function BadgeCompetences(props) {
  return (
    <>
        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl shadow-md font-sans">
            <img src={props.logo} alt={`logo ${props.nom}`} className='w-8'/>
            <span className="font-bold text-xl tracking-wide ">{props.nom}</span>
        </div>
    </>
  )
}



export default BadgeCompetences