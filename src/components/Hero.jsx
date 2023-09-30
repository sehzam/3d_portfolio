import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas, EarthCanvas } from './canvas'
import CanvasLoader from './Loader'
import { useIsMobile } from '../MobileContext'
import { SectionWrapper } from '../hoc'

const Hero = () => {
  const isMobile = useIsMobile()

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} justify-between flex flex-row-reverse absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff0000]" />
          <div className="w-1 sm:h-80 h-60 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-center ml-10 text-white`}>Greet  <span className="text-[#D30117]"> U </span>,<br /> I'm <span className="text-[#D30117]">Kadir</span></h1>
          <p className={`${styles.heroSubText} text-center ml-10  mt-2 text-white-100`}>
            I develop and manage<br /> 3D Visuals, <br />
            Web & Mobile applications.
          </p>
        </div>
      </div>

      {/* Wrap your 3D Canvas components with Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <CubeCanvas /> */}
        {/* <ComputersCanvas /> */}
        <EarthCanvas isMobile={isMobile} />
      </Suspense>

      <div className={`absolute xs-bottom-10 bottom-32 w-full flex justify-center items-center ${isMobile ? '' : 'hidden'}`}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-indigo-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-indigo-200 mb-1  "
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")
