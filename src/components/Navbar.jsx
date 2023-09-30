import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

import { useIsMobile } from '../MobileContext'

const Navbar = () => {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('"')
  const [toggle, setToggle] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Bestimmen Sie die Scroll-Richtung
      if (scrollY > (prevScrollY)) {
        // Nach unten gescrollt
        setScrolling(true)
      } else if (scrollY < (prevScrollY)) {
        // Nach oben gescrollt
        setScrolling(false)
      }

      // Aktualisieren Sie die vorherige Scroll-Position
      setPrevScrollY(scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollY])

  return (
    <nav className={`${styles.paddingX} 
    w-full flex items-center py-2 fixed justify-start 
    top-0 z-20 bg-primary border-b-2 border-indigo-500 
    transition-transform duration-1000 delay-500 
    ${scrolling ? 'transform -translate-y-full' : ''}`}>
      <div className="w-full flex items-center max-w-7xl mx-auto">
        <div className={`flex flex-1 justify-start items-center 
                        transition-transform duration-500 delay-500
                        ${scrolling ? 'transform translate-y-[100vh]' : ''}`}>

          <button className={`bg-indigo-500 hover:bg-indigo-500 text-white font-semibold 
                              py-2 px-4 rounded inline-flex items-center 
                              transition-transform duration-2000 delay-500
                        ${scrolling ? 'transform' : ''}`}>
            CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 2a1 1 0 011 1v13a1 1 0 11-2 0V3a1 1 0 011-1zm15 0a2 2 0 012 2v13a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h7a1 1 0 110 2H5a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 110-2h2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <a href="#hero">
          <img src={logo} alt="logo" className="h-12 object-contain" />
        </a>


        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-indigo-300"
                } hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={`lg:hidden flex flex-1 justify-end items-center  
                        transition-transform duration-500 delay-500
                        ${scrolling ? 'transform translate-y-[100vh]' : ''}`}>
          <div className="p-2 rounded-full border-2 border-indigo-500">

            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className={`${!toggle ? 'hidden' : 'block'} 
                          p-6 bg-primary absolute right-0 mx-4 my-2 min-w-[140px] 
                          z-10 rounded-xl shadow md:shadow-2xl  
                          shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/40 
                          border-t border-l border-indigo-600 
                          transition-transform duration-500 delay-500
                          ${scrolling ? 'bottom-20' : 'top-20'}
                          `}>
            <ul className="list-none flex flex-col justify-end items-start font-medium cursor-pointer text-[16px]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )

}

export default Navbar