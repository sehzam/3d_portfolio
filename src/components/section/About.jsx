import React, { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../../styles/styles'
import { services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'


const ServiceCard = ({ index, title, icon }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(true)
    }, 3000) // Hier kannst du die Zeit in Millisekunden anpassen, nach der die Animation starten soll

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Tilt
      className={`
        sm:w-[220px]
        md:w-[300px]
        w-full rounded-[20px]
        shadow-indigo-500/10 
        shadow-2xl hover:shadow-indigo-500/50
        justify-self-center
        hover:z-30 z-10
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.3 }}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px] "
      >
        <div className="oceanBorder p-[0.5px] rounded-3xl ">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 300,
            }}
            className="rounded-[20px] p-8 min-h-[280px]bg-white flex justify-evenly items-center flex-col white-indigo-gradient"
          >
            <div className="rounded-full border-2 p-[3.5px] oceanBorder w-[130px]  mb-3 justify-between">
              <img
                src={icon}
                alt={title}
                className="object-contain bg-slate-500 border-[1px] rounded-full py-3"
              />
            </div>

            <h3 className="font-card t6 text-[20px] font-bold text-center blue-text-gradient about-title pt-14 min-h-[115px]">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <div>
      <motion.div variants={fadeIn()}>
        <p className={`${styles.sectionSubText} section-p`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} section-h2`}> Overview </h2>
        <div className="barBottom"></div>
      </motion.div>


      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 orange-text-gradient text-[17px] max-w-3xl leading-[30px] text-white">
        I'm a skilled software developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React, Node.JS, and Three.js.
        <br />
        to create efficient, scalable, and <br />
        user-friendly solutions
        <br />
        I'm a quick learner and collaborate closely
        <br />
        with clients
        that solve real-world problems.
        <br />
        Also am i continuously studying data science to be the Allrounder for my customers.<br />
        Let's work together to bring your ideas to life!

        <br />
      </motion.p>
      <div className="barBottom"></div>

      <div className="mt-20 grid grid-cols-2 md:flex md:flex-wrap gap-2 justify-center z-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")