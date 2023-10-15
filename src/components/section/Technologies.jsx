import { TechCard } from '../canvas'
import { SectionWrapper } from '../../hoc'
import { technologies } from '../../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import { styles } from '../../styles/styles'
import { Tooltip } from 'react-tippy'

import CanvasLoader from './Loader'
import { Suspense } from 'react'

const Technologies = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap  gap-2 
      ">

        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} exp-p`}>
            Technologies
          </p>
          <h2 className={`${styles.sectionHeadText} w-full  exp-h2`}>
            My Stack
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[17px] max-w-3xl leading-[30px] orange-text-gradient m-10"
        >
          <div className="barBottom"></div>
          Following cards symbolize my abilities in various development technologies.
          <br />
          A continuously learning journey of my life.
          <br />
          <br />
          <div className="barBottom"></div>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10 
                      shadow-lg 
                      hover:border-indigo-400/50 
                      hover:border-x-2 
                      border-indigo-500 
                      duration-2000 
                      hover:shadow-none
                      shadow-indigo-500
                      p-10 
                      rounded-2xl
                      ">
          {Object.keys(technologies).map((tech, index) => {
            const technology = technologies[tech]
            // console.log("Technology Name:", tech)
            // console.log("URL:", technology.url)
            // console.log("Icon:", technology.icon)

            return (

              <Tooltip
                key={index}
                position='top-end'
                interactive
                trigger='click'
                html={(
                  <div>
                    <div className="bg-[#111A2F] rounded-md text-white px-2">
                      <h5 className='p-2 f04 text-xl'>{technology.desc}</h5>
                      <a href={technology.url} target='_blank'>
                        <button
                          className='
                                    px-3 py-1 mb-2 text-white 
                                  bg-blue-800/70  text-xl
                                    border border-blue-900 rounded-lg 
                                    hover:bg-indigo-900
                                    '
                        >

                          {tech} Webpage
                        </button>
                      </a>
                    </div>

                  </div>
                )}
              // trigger="click"
              >
                <div className="h-20 flex justify-center">

                  <Suspense fallback={<CanvasLoader />}>
                    <TechCard icon={technology.icon} />
                  </Suspense>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Technologies, "technologies")