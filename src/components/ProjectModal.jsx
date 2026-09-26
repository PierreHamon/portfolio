import github_logo from "./../assets/icons/GitHub_Invertocat_White.png"

function ProjectModal({ project, onClose }) {
    if (project == null) return null;
    return (
        <div onClick={onClose} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-background max-w-[80%] w-full p-6 rounded-xl" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-serif-display text-2xl md:text-4xl text-center">
                    {project.titre}
                </h2>
                <h3 className="font-space-grotesk text-xl md:text-2xl text-purple-second font-bold text-center">
                    {project.soustitre}
                </h3>
                <div className="flex flex-row flex-wrap gap-2 mt-3 justify-center">
                    {project.techno && project.techno.map((techno, index) => (
                        <div className="inline-flex items-center gap-2 bg-blue-second text-white px-4 py-2 rounded-xl shadow-md font-sans">
                            <span className="font-bold text-xl tracking-wide ">{techno}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-3">
                    {project.source && (
                        <a href={project.source} className="inline-flex items-center gap-2 bg-black text-white px-12 rounded-xl shadow-md font-sans">
                            <img src={github_logo} alt={project.titre} className="w-10 py-2"/>
                        </a>
                    )}   
                </div>
                <p className="font-open-sans text-lg text-justify my-3 line-clamp-6">
                    {project.description}
                </p>
                <div>
                    <h3 className="font-space-grotesk text-xl text-text md:text-2xl font-bold">Étapes du projet :</h3>
                    <ol className="font-open-sans text-lg text-text list-decimal ms-7">
                        {project.etapes && project.etapes.map((etapes, index) => (
                            <li>{etapes}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
        
    );
}
export default ProjectModal;