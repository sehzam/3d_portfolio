import { createContext, useContext, useState, useEffect } from 'react'

const MobileContext = createContext()

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 550)
  }, [])

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  )
}

export const useIsMobile = () => {
  return useContext(MobileContext)
}