import { useState } from 'react'
import Header from './components/Header'
import Parcours from './components/Parcours'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Competences from './components/Competences'
import Projets from './components/Projets'
import Passions from './components/Passions'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen w-full bg-brand-bg text-slate-900'>
        <button type='button' className='fixed bottom-5 right-5'>
          <a href="#header">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#7C3AED" />
            <path d="M32 28 L24 20 L16 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </button>
        <Header />
        <Hero />
        <AboutMe />
        <Competences/>
        <Projets />
        <Parcours />
        {/* <Passions /> */}
        <CV/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
