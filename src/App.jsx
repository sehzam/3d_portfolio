import { BrowserRouter } from 'react-router-dom'
import { MobileProvider } from './MobileContext'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <MobileProvider>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <div className="relative z-0">
            <StarsCanvas />
            <Hero />
          </div>
          <About />
          <Experience />
          <div className="relative z-0">
            <StarsCanvas />
            <Tech />
          </div>
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <StarsCanvas />
            <Contact />
          </div>
        </div>
      </MobileProvider>
    </BrowserRouter>
  )
}

export default App
