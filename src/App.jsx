import { BrowserRouter } from 'react-router-dom'
import { MobileProvider } from './context/MobileContext'
import { ContactModalProvider } from './context/ContactModalContext'
import { CvModalProvider } from './context/CvModalContext'
import { Navbar, Hero, About, Contact, Experience, Feedbacks, Technologies, Works, DataScience } from './components'
import loadFonts, { fontFamilies } from "./loader/FontsLoader"
import { useEffect } from 'react'


const App = () => {
  useEffect(() => {
    loadFonts(fontFamilies)
  }, [])
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault()
    }

    // Rechtsklick-Ereignis auf dem gesamten Dokument deaktivieren
    document.addEventListener('contextmenu', disableRightClick)

    return () => {
      // Aufräumen, wenn die Komponente unmontiert wird
      document.removeEventListener('contextmenu', disableRightClick)
    }
  }, [])
  return (
    <BrowserRouter>
      <MobileProvider>
        <ContactModalProvider>
          <CvModalProvider>
            <div className="relative w-screen bg-black ">
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Technologies />
              <Works />
              <Feedbacks />
              <Contact />
            </div>
          </CvModalProvider>
        </ContactModalProvider>
      </MobileProvider>
    </BrowserRouter>
  )
}
export default App