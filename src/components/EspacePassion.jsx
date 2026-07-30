import montage from './../assets/images/passion-montage.jpg';
import musique from './../assets/images/musique.webp';


function EspacePassion(props) {
  return (
    <>
        <div
        className={`relative w-full h-screen bg-cover bg-center flex text-white ${props.inverse ? 'flex-row-reverse' : ''}`}
        style={{ backgroundImage: `url(${props.image})` }}>
            <div className='absolute inset-0 bg-white/50 z-0'></div>
            <div className='relative z-10'>
                <h1 className='title-primary m-5'>{props.titre}</h1>
            </div>
        </div>
    </>
  )
}



export default EspacePassion