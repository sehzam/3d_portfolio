import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <div className="relative z-0">
          {/* <div className="bg-hero-pattern bg-cover vg-no-repeat bg-center"> */}
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <StarsCanvas />
          <Experience />
        </div>
        <Tech />
        <div className="relative z-0">
          <StarsCanvas />
          <Works />
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
