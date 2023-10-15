import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles/styles'
import { OrchideeCanvas } from '../canvas'
import CanvasLoader from './Loader'
import { useIsMobile } from '../../context/MobileContext'
import { SectionWrapper } from '../../hoc'

const Hero = () => {
  const isMobile = useIsMobile()

  return (
    <section className="relative mx-auto">



      <div
        className={`${styles.paddingX} 
                justify-center flex flex-row-reverse 
                
                inset-0 top-[10px] max-w-7xl 
                mx-auto items-start gap-5`}
      >

        {/* BAR */}
        {/* TITLE */}
        <div className='flex flex-col justify-around'>
          <div className="barBottom"></div>

          <h1
            className={`${styles.heroHeadText} f05
                    text-center ml-10 text-white`}>
            Greet
            <span
              className="text-[#D30117] px-10 hero-u">
              U
            </span>
            I'm
            <span className="text-[#D30117] px-10 hero-i">
              KADIR
            </span>
          </h1>
          <div className="barBottom"></div>


        </div>
      </div>

      <div className="h-[500px] rounded-full">

        {/* Wrap your 3D Canvas components with Suspense */}
        <Suspense fallback={<CanvasLoader />}>
          <OrchideeCanvas isMobile={isMobile} />
        </Suspense>
      </div>
      <div className="barBottom"></div>

      <h5 className={`${styles.heroSubText} 
          text-center  hero-p t5
          text-white-100 bg-black-200
          `}>

        I develop and manage

        <br />
        Web & Mobile applications.
      </h5>
      <br />
      <div className="barBottom"></div>

      <div className={`absolute top-[35%] left-[50%] transform-translate -translate-y-2/4 -translate-x-2/4 `}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 
          border-red-800   items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-red-500 mb-1  "
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")
