import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas, EarthCanvas, CubeCanvas } from './canvas'
import CanvasLoader from './Loader'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6366F1]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} ml-10 text-white`}>Greet  <span className="text-[#D30117]"> U </span>,<br /> I'm <span className="text-[#D30117]">· Kadir ·</span></h1>
          <p className={`${styles.heroSubText} ml-10  mt-2 text-white-100`}>
            I develop and manage<br /> 3D Visuals, <br />
            Web & Mobile applications.
          </p>
        </div>
      </div>

      {/* Wrap your 3D Canvas components with Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <CubeCanvas /> */}
        <ComputersCanvas />
        {/* <EarthCanvas /> */}
      </Suspense>

      <div className="absolute xs-bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
