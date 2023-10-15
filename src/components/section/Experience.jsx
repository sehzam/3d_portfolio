import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../../styles/styles'
import { experiences } from '../../constants'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'

const ExperienceCard = ({ experience }) => {
  return (

    <VerticalTimelineElement

      contentStyle={{
        background: '#010009',
        border: "0.1px solid violet",
        borderRadius: "2%",
        padding: "30px",
        color: 'white'
      }}
      contentArrowStyle={{ borderRight: '7px solid #DD6600' }}
      date={experience.date}
      titles={experience.titles}
      iconStyle={{ background: experience.iconBg }}
      className=''
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          className=" object-fill p-1"
        />
      }
    >


      <div className='mb-4'>
        <h3
          className="text-white text-[24px] font-bold f01 t20"
        >{experience.title}</h3>
        <p className="t31 text-[16px] font-semibold text-right"><a href={experience.url}>{experience.url}</a></p>
        <p className="t8 text-[16px] font-semibold"
          style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      {experience.points.map((p, index) => (
        <h5 key={index} className='px-2 f94'>{p}</h5>
      ))}


      <h3 className='f19 t19 text-[42px] text-center my-4'>Absolved Knowledge</h3>
      <div className=" grid xs:grid-cols-1 sm:grid-cols-2">
        {experience.projects.map((p, index) => (
          <div key={index} className="heroBorder rounded-2xl m-1">

            <div className="flex flex-col rounded-2xl bg-black h-full">
              <div className="t6 f17 text-xl w-full text-center  mt-3">
                {p.name}
              </div>
              <div className=" text-center px-2 w-full my-3">
                <h5>{p.desc}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>



    </VerticalTimelineElement>

  )
}

const Experience = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className={`${styles.sectionSubText} exp-p`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} exp-h2`}>
          Work Experience
        </h2>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 orange-text-gradient text-[17px] 
      max-w-3xl leading-[30px] text-white">
        <div className="barBottom"></div>

        My working and learning experience organized in a timeline.
        <br />
        <br />
        <div className="barBottom"></div>

      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  )
}
export default SectionWrapper(Experience, "experiences")