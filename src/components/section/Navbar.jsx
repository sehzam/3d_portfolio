import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../styles/styles'
import { navLinks } from '../../constants'
import { cv, hero } from '../../assets'

import { useIsMobile } from '../../context/MobileContext'
import { useIsContactModal } from '../../context/ContactModalContext'
import { useIsCvModal } from '../../context/CvModalContext'
import CvModal from '../modal/CvModal'

const Navbar = () => {
  const isMobile = useIsMobile()
  const { modalOpen } = useIsContactModal()
  const { modalCvOpen, openCvModal } = useIsCvModal()

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
        setToggle(false)
      } else if (scrollY < (prevScrollY)) {
        // Nach oben gescrollt
        setScrolling(false)
        setToggle(false)
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
    <>
      {/* Top Navbar */}
      {/* Mobile Bottom Navbar */}
      {/* TOP Mobile Bar */}
      < nav
        className={`${isMobile ? "" : ""}
        ${styles.paddingX}
        ${modalOpen ? ' hidden' : 'z-50'}
        py-1 w-full fixed left-0 bottom-0
        transition-transform duration-500 delay-500`}
      >

        <ul className={`pointer-none list-none flex flex-row 
                        justify-between xl:justify-center items-center font-medium 
                        cursor-pointer text-[16px] 
                        transition-transform duration-500 delay-500 `} >

          <li

            className={`
                         hover:text-white text-[20px]  font-medium cursor-pointer`}
          >
            <motion.div

              className={`${scrolling ? 'transform ' : ''} 

              object-contain rounded-`}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >

              <button onClick={() => openCvModal()} className=" skyBorder rounded-full p-[0.1px] mx-5 ">

                <img src={cv} alt='icon'
                  className='h-16 w-16 object-contain rounded-full  bg-gray-950/80'

                />
              </button>
            </motion.div>
          </li>

          <li
            className={`
                          hover:text-white text-[20px] font-medium cursor-pointer`}
          >
            <motion.div
              className={`${scrolling ? 'transform ' : ''} 
              object-contain rounded-full  `}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >

              <a href="#hero">

                <button className=" skyBorder rounded-full p-[0.1px] mx-5">

                  <img src={hero} alt='hero'
                    className='h-16 w-16 object-contain rounded-full  bg-gray-950/80'
                  />
                </button>
              </a>
            </motion.div>
          </li>

        </ul>

      </nav >
      {/* BOTTOM Mobile Bar */}
      < nav
        className={`${isMobile ? "" : ""}
        ${modalOpen ? ' hidden' : 'z-50'} 
        ${scrolling ? 'transform -translate-y-full' : ''} 
        ${styles.paddingX}
                    py-1 fixed top-0 left-0 w-screen
                    transition-transform duration-500 delay-500  bg-slate-950/50`}
      >

        <ul className={`pointer-none list-none flex flex-row 
                        justify-center items-center font-medium 
                        cursor-pointer text-[16px] 
                        transition-transform duration-500 delay-500 `} >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-indigo-300"} 
                          m-1 hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <motion.div
                className={`${scrolling ? 'transform ' : ''} 
              object-contain rounded-full  
               `}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >


                <a href={`#${link.id}`}>
                  <button className=" skyBorder rounded-full p-[0.1px]">

                    <img src={link.icon} alt='icon'
                      className='h-16 w-16 object-contain rounded-full  bg-gray-950/80'
                    />
                  </button>
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav >
      <CvModal />

    </>
  )
}

export default Navbar