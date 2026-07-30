import montage_img from './../assets/images/passion-montage.jpg';
import musique_img from './../assets/images/musique.webp';
import EspacePassion from './EspacePassion';
import angelsegg from './../assets/images/angels_egg.webp';
import belladonna from './../assets/images/belladonna_of_sadness.jpg';
import devilman from './../assets/images/devilman_crybaby.webp';
import grave from './../assets/images/grave.webp';
import ponyo from './../assets/images/ponyo.webp';
import portrait_feu from './../assets/images/portrait_feu.webp';
import psycho from './../assets/images/psycho.webp';
import blood from './../assets/images/there_will_be_blood.webp';
import lucioles from './../assets/images/tombeau_des_lucioles.jpg';

function Passions(props) {
    const montage = {
        titre: "Montage vidéo",
        image: montage_img,
        inverse: false
    };
    const musique = {
        titre: "Création musicale",
        image: musique_img,
        inverse: true
    };
  return (
    <>
        <setion>
            <EspacePassion {...montage}/>
            <EspacePassion {...musique}/>
            <div className='w-full relative'>
                <img src={angelsegg} alt="affiche film" className='absolute left-220 top-3 w-150'/>
                <img src={belladonna} alt="affiche film" className='absolute left-320 top-150 w-120'/>
                <img src={devilman} alt="affiche film" className='absolute left-250 top-78 w-80'/>
                <img src={grave} alt="affiche film" className='absolute left-120 top-63 w-50'/>
                <img src={ponyo} alt="affiche film" className='absolute left-140 top-153 w-70'/>
                <img src={portrait_feu} alt="affiche film" className='absolute left-80 top-0 w-130'/>
                <img src={psycho} alt="affiche film" className='absolute left-40 top-153 w-90'/>
                <img src={blood} alt="affiche film" className='absolute left-400 top-10 w-70'/>
                <img src={lucioles} alt="affiche film" className='relative left-10 top-10 w-80'/>
            </div>
        </setion>
    </>
  )
}



export default Passions