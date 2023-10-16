import { motion } from "framer-motion"
import { useState } from 'react'


const TechCard = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>

      <motion.div
        layout
        className="box parent"
        whileHover={{ scale: 2 }}
        animate={'click'}
        whileTap={{ scale: 5 }}
        transition={{ type: "spring", stiffness: 100, damping: 17 }}
        data-isopen={isOpen}
      >
        <motion.div layout className="child" />

        <div className="blueBorder rounded-full">

          <img
            src={icon}
            className='h-20 bg-gray-900/95 object-cover  rounded-full m-[0.1px] z-50'
          />
        </div>

      </motion.div>
    </div>

  )
}
export default TechCard