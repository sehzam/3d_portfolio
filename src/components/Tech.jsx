import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

import CanvasLoader from './Loader'
import { Suspense } from 'react'

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            · Technologies ·
          </p>
          <h2 className={styles.sectionHeadText}>My Stack</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following balls symbolize my abilities in various development technologies.
          <br />
          A continuously learning journey of my life.
        </motion.p>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <Suspense fallback={<CanvasLoader />}>
                {/* <BallCanvas icon={technology.icon} /> */}
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")