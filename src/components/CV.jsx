import img_cv from "./../assets/images/CV_generaliste.png"
import CV_pdf from "./../../public/CV_generaliste.pdf"

function CV() {
  return (
    <>
        <section className="flex flex-col items-center">
            <div className="flex justify-center items-center py-5">
                <h1 className="title-primary">Curriculum vitae</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="3em" height="3em" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M6 20a6 6 0 0 1 12 0" />
                </svg>
            </div>
            <img src={img_cv} alt="image de mon CV" className="w-[50%]"/>
            <a href={CV_pdf} download="CV_Pierre_Hamon.pdf" className="bg-purple-second px-15 py-1 rounded-md my-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.5em" height="2.5em" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="4" x2="12" y2="15" />
                <polyline points="7 10 12 15 17 10" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
            </a>
        </section>
    </>
  )
}



export default CV