import ContactForm from "./ContactForm"

function Contact() {
  return (
    <>
    <div id="contact" className="flex justify-center items-center py-5">
        <h1 className="title-primary">Contact</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="3em" height="3em" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="18" rx="3" ry="3" />
        <line x1="8" y1="2" x2="8" y2="4" />
        <line x1="16" y1="2" x2="16" y2="4" />
        <circle cx="12" cy="11" r="3" />
        <path d="M8 22v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1" />
        </svg>
    </div>
    <div className="flex justify-center items-center">
        <ContactForm/>
    </div>
    </>
  )
}

export default Contact