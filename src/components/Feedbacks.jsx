import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='mt-10 p-10 rounded-3xl xs:w-[320px] w-full shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/50 border-x-2 border-x-indigo-600 shadow shadow-xl bg-black-100'
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-white-100 text-[12px]">
              {designation} <br />
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </Tilt >
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] bg-indigo-500 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/50">
      <div className={`${styles.padding} bg-black-100 rounded-t-2xl min-h-[150px] border-b-4 border-b-indigo-600`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>· Testimonials ·</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} bg-tertiary pb-14 flex flex-wrap gap-7 justify-center rounded-b-3xl `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")