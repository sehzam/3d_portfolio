import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles/styles'
import { github } from '../../assets'
import { SectionWrapper } from '../../hoc'
import { projects } from '../../constants'
import { useState } from 'react'
import { Tooltip } from 'react-tippy'

const ProjectCard = ({ index, initial, name, description, tech, active, image, source_code_link }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className=" rounded-2xl mt-10"
      whileHover={{ scale: 1.25, zIndex: 1000, justifySelf: 'center' }}
      whileTap={{ scale: 1, zIndex: 1000 }}
      transition={{ type: "spring", stiffness: 100, damping: 17 }}>


      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 300,
        }}
        className='rounded-2xl xs:w-[400px] sm:w-[400px] 
                   w-full min-h-fit mt-5 p-1
                   shadow-indigo-500/10 
                     bg-[#222222]
                     border border-gray-400  py-2
                   shadow-2xl hover:shadow-indigo-500/50 
                   '>
        <div className="border-2 border-gray-700  bg-[#111111] rounded-xl p-2 px-6">
          <motion.div
            layout
            whileTap={{ scale: 3.2 }}
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 17 }}
            data-isopen={isOpen}
          >
            <motion.div layout className="child" />


            <img
              src={image}
              alt={`feedback-by-${name}`}
              className='w-full h-full hover:border-2 rounded-xl oceanBorder'
            >
            </img>
          </motion.div>


          <div className="mt-1">
            <div className="flex justify-between items-center">




              <div className="flex-1 flex flex-col text-center ">
                <div className="flex flex-row text-center justify-center items-end">
                  <div className="flex flex-col content-center">
                    <span className="initial t18 f117 text-[32px]">{initial}</span>
                    <p className="text-white font-medium text-[22px] t12 f21">
                      {name}
                    </p>
                  </div>
                  <div className="flex flex-row text-center">
                    {!active ? " " :
                      <div className=" flex justify-center card-img_hover  ">
                        <div
                          className=" flex justify-center items-center cursor-pointer "
                        >

                          <div className='rounded-full'
                            onClick={() => window.open(source_code_link, "_blank")}
                          >

                            <motion.div
                              layout
                              className="box parent"
                              whileHover={{ scale: 2.2 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", stiffness: 100, damping: 17 }}
                              data-isopen={isOpen}
                            >
                              <motion.div layout className="child" />

                              <img
                                src={github}
                                className='h-14 object-cover rounded-xl m-[0.1px]'
                              />

                            </motion.div>
                          </div>
                        </div>

                      </div>
                    }
                  </div>
                </div>







                <div className=" flex-row  grid grid-cols-3 ">
                  {tech.map((tag, index) => (
                    <Tooltip
                      key={index}
                      trigger="click"
                      position='top-end'
                      interactive
                      html={(
                        <div className="bg-[#111A2F] rounded-md text-white px-2">
                          <h5 className='p-2 f04 text-xl t18'>{tag.desc}</h5>
                          <a href={tag.url} target='_blank'>

                            <button
                              className='
                              px-3 py-1 mb-2 text-white text-xl t41
                              bg-blue-900/90 
                              border border-blue-900 rounded-lg 
                              hover:bg-indigo-900
                              '
                            >

                              {tag.name} Webpage
                            </button>
                          </a>
                        </div>

                      )}
                    // trigger="click"
                    >
                      <div key={index}>


                        <div className="flex flex-col justify-end  ">
                          <motion.div
                            layout
                            className="box parent"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 17 }}
                            data-isopen={isOpen}
                          >
                            <motion.div layout className="child" />
                            <div className="blueBorder rounded-full">
                              <img
                                src={tag.icon}
                                className='h-16 bg-gray-900/95 object-cover  rounded-full m-[0.1px]'
                              />
                            </div>
                          </motion.div>
                          <div className={`${tag.color} text-[16px] f82 px-6`}>{tag.name}</div>
                        </div>
                      </div>

                    </Tooltip>

                  )
                  )}
                </div>
                <div className="fireBorder rounded-xl mt-4">
                  <div className="bg-[#171717]  rounded-xl text-[18px] p-3">
                    <h5
                      className="t44 f21 rounded-xl">
                      {description}
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Tilt >
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className='w-full'>
      <p className={`${styles.sectionSubText} work-p`}>
        My work
      </p>
      <h2 className={`${styles.sectionHeadText} work-h2`}> Projects </h2>
      <div className="barBottom"></div>

      <div className="w-full flex t04">
        <p
          className="mt-3 text-[17px] max-w-3xl leading-[30px] orange-text-gradient "
        >

          Following projects showcases my skills and experience through <br /> real-world examples of my work.
          <br />
          Each project is briefly described with links to code repositories and live demos in it.
          <br />
          It reflects my ability to solve complex problems, work with different technologies, and<br />  manage projects effectively.
          <br />
        </p>
      </div>
      <div className="barBottom"></div>

      <div className="mt-2 flex flex-wrap gap-8 justify-center bg-[#000000] rounded-2xl duration-500">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "works")