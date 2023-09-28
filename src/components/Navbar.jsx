import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('"')
  const [toggle, setToggle] = useState(false)
  const [scrolling, setScrolling] = useState(false) // Zustand für das Scroll-Verhalten
  useEffect(() => {
    // Funktion, um das Scroll-Verhalten zu überwachen
    let y = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true) // Scrollen nach unten, Navbar ausblenden
      } else {
        setScrolling(false) // Scrollen nach oben, Navbar sichtbar machen
      }
    }

    // Event-Listener zum Überwachen des Scroll-Verhaltens hinzufügen
    window.addEventListener('scroll', handleScroll)

    // Event-Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary border-b-2 border-indigo-500 ${scrolling ? 'hidden' : '' // Navbar ausblenden, wenn scrolling true ist
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          {/* <img src={logo} alt="logo" className=" h-12 object-contain" /> */}
          <p className="text-white text-[22px] font-bold cursor-pointer flex">
            <span className="md:block hidden"> · Portfolio ·</span></p>
        </Link>
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

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} border-x-2 border-indigo-600 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow md:shadow-2xl`}>
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
    </nav>
  )
}

export default Navbar