import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../../styles/styles'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'
import { testimonials } from '../../constants'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const FeedbackCard = ({ index, testimonial, name, designation, company, image, isOpen }) => (

  <motion.div
    className='   my-20'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.7 }}
    transition={{ type: "spring", stiffness: 100, damping: 17 }}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 0.1
      }}
      className='mt-10 p-2 text-center rounded-3xl mx-10 mb-24 md:mx-40 md:mb-40 lg:mx-56 lg:mb-56 xl:mx-70 xl:mb-70 
      hover:shadow-2xl  
      shadow-indigo-500/40 
      hover:border-y-indigo-600/80 
      border-y-indigo-600/20 
      bg-slate-950/80
      border-y
      hover:z-30 z-10
   
      '
    >
      <p className="text-white font-black text-[32px] f17 t100">"</p>
      <div className="mt-1 duration-0">
        <p className="text-white tracking-wider text-[14px] md:text-[20px]  f23 t88">{testimonial}</p>
        <div className="mt-7 flex justify-between gap-1">
          <div className="flex-1 flex flex-col items-end justify-between">


            <div className="flex flex-row">
              <span className="mr-2 t19 text-right">@</span>
              <span className="text-white text-right">{name}</span>
            </div>
            <span className="blue-text-gradient text-right">{designation}</span>
            <motion.div
              layout
              className="my-3"
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 4 }}
              transition={{ type: "spring", stiffness: 100, damping: 17 }}
              data-isopen={isOpen}
            >
              <motion.div layout className="child" />
              <div className="fireBorder rounded-full hover:z-30 z-10">
                <img
                  src={image}
                  alt={`feedback-by-${name}`}
                  className='w-16 rounded-full object-cover p-[0.001px] hover:z-0 z-10'
                />
              </div>
            </motion.div>
            <span className="t22 text-right">{company}</span>

          </div>
        </div>
      </div>
    </Tilt >

  </motion.div>
)

const Feedbacks = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="
    py-10
    w-full 
    mt-12 
    rounded-[20px] 
    border-x 
    border-indigo-500/5 
    shadow-md
    hover:shadow-indigo-500/50 
    duration-1000

    ">
      <div className={`${styles.padding} 
      rounded-t-2xl `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} feed-p left-1/2`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} t-0 feed-h2`}> Testimonials </h2>

          <br />
          <div className="barBottom"></div>
        </motion.div>

      </div>

      <Carousel touch
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          </Carousel.Item>
        ))}


      </Carousel>
    </div>

  )
}

export default SectionWrapper(Feedbacks, "feedbacks")





