import React, { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'


import { styles } from '../../styles/styles'
import { science } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'
import { logo } from '../../assets'


const ScienceCard = ({ index, id, title, description, specialization, skills, icon }) => {
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
        xs:w-[400px]
        sm:w-[450px]
        md:w-[500px]
        lg:w-[600px]
         rounded-[20px]
        justify-self-center
        hover:z-30 z-10
        
      `}
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.5 }}
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full rounded-[20px]"
            >
                <div className="oceanBorder p-[0.5px] rounded-3xl">
                    <div
                        options={{
                            max: 15,
                            scale: 1,
                            speed: 300,
                        }}
                        className="rounded-[20px] p-8 min-h-[280px] flex justify-evenly items-center flex-col bg-black"
                    >
                        <div className="rounded-full border-2 p-[3.5px] oceanBorder w-[160px]">
                            <img
                                src={logo}
                                alt={title}

                                className="object-contain bg-slate-500 border-[1px] rounded-full hover:z-30 z-10"
                            />
                        </div>

                        <h3 className="f13 t6 text-[33px] text-center blue-text-gradient  pt-14min-h-[100px]">
                            {title}
                        </h3>


                        <ul className="mt-5 list-disc ml-5 space-y-2  rounded-lg p-2 t7 bg-[#222222]">
                            <div className='py-10 border p-5 rounded-2xl my-6 bg-[#222222]'>
                                <h4 className='f23 t19 mb-5'>{description}</h4>
                                <h3 className='text-right f117 t25 text-xl'>
                                    Specialization :
                                    <h5 className='t69'>{specialization}</h5>
                                </h3>
                                <div className="barBottom"></div>
                                <h3 className='text-left f27 t75 text-xl'>Supported Features</h3>
                                <div className="grid grid-cols-2">

                                    {skills.map(s => (
                                        science.map(sc => (
                                            <h5 className='m-2 t18 f45 text-[16px]'>{sc.skills[s]}</h5>
                                        ))

                                    ))}
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    )
}


const DataScience = () => {
    return (
        <div>
            <div variants={textVariant()}>
                <p className={`${styles.sectionSubText} section-p`}>Following interests</p>
                <h2 className={`${styles.sectionHeadText} section-h2`}> Data Science </h2>
                <div className="barBottom"></div>
            </div>

            <p
                className="mt-4 orange-text-gradient text-[17px] max-w-3xl leading-[30px] text-white">
                The inspiration to learn data science topics and delve into the twelve job variants within this field stems from the profound impact data science has on our world. In an era driven by data, the ability to extract valuable insights and solve complex problems is not just a career choice but a necessity. The versatility of data science, with roles ranging from data analysts to machine learning engineers, allows for constant growth and adaptability within one's career. The promise of contributing to cutting-edge technology, making data-driven decisions, and addressing real-world challenges is a motivating factor that fuels this journey of exploration and learning. Moreover, the continuous demand for data science professionals in a variety of industries ensures a wealth of opportunities for those who embark on this educational path. It is the intersection of passion for data, the ever-evolving nature of the field, and the potential to effect positive change that makes learning data science and its various job variants a compelling and inspiring endeavor.
            </p>
            <div className="barBottom"></div>

            <div className="mt-20 
            grid
            grid-cols-1 
            gap-2 justify-center">
                {science.map((data, index) => (
                    data.titles.map((t, index) => (
                        <ScienceCard key={t.title} index={index} {...t} />

                    ))
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(DataScience, "science")