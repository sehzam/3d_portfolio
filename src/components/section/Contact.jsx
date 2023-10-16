import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../../styles/styles'
import { EarthCanvas } from '../canvas'
import ContactModal from '../modal/ContactModal'
import CvModal from '../modal/CvModal'
import { SectionWrapper } from '../../hoc'
import { useIsMobile } from '../../context/MobileContext'
import { useIsContactModal } from '../../context/ContactModalContext'
import { useIsCvModal } from '../../context/CvModalContext'

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react"


const Contact = () => {
  const isMobile = useIsMobile()
  const { modalOpen, closeModal, openModal } = useIsContactModal()
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: '',
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setForms({ ...forms, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_50qua85',
      'template_qbv50fu',
      {
        from_name: form.name,
        to_name: "Kadir",
        from_email: form.email,
        to_email: "kadurcey@gmail.com",
        message: form.message,
      },
      'K0Rthvp5MCNmbaHIL'
    ).then(() => {
      setLoading(false)


    })

    setForm({
      name: "",
      email: "",
      message: "",
    })
    openModal()
    setLoading(false)
  }
  return (
    <div className="
                  rounded-2xl p-4
                  xl:mt-12 xl:flex-row
                  flex-col-reverse flex gap-2 w-full
                  ">
      <div
        className="
                  flex-row p-10 rounded-2xl 
                  hover:shadow-xl hover:shadow-indigo-500/30 duration-1000
                  ">
        {/* TITLE */}
        <div className="p-2 rounded-xl ">

          <p className={`${styles.sectionSubText} contact-p`}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText} contact-h2`}> Contact </h2>

          <br />
          <div className="barBottom"></div>
        </div>
        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="
                    mt-12 flex flex-col gap-2 items-center
                    ">
          {/* NAME */}
          <label className="flex flex-col w-full">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="
                      bg-[#171A1E] py-4 px-6 text-white rounded-lg 
                      outlined-none border-none font-medium placeholder:text-secondary
                      shadow-2xl hover:shadow-indigo-500/50 duration-1000
                      "/>
          </label>
          {/* EMAIL */}
          <label className="flex flex-col w-full">
            <span className="text-white font-medium mb-4">Your Email </span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="
                        bg-[#171A1E] py-4 px-6 text-white 
                        rounded-lg outlined-none border-none font-medium 
                        placeholder:text-secondary
                        shadow-2xl hover:shadow-indigo-500/50 duration-1000
                        "/>
          </label>
          {/* MESSAGE */}
          <label className="flex flex-col w-full">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              cols='20'
              rows="10"
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ resize: 'none', overflow: 'hidden' }}
              placeholder="What want you tell me? Thanks a lot for your Feedback!"
              className="
                        bg-[#171A1E] py-4 px-6 text-white 
                        rounded-lg outlined-none border-none font-medium 
                        placeholder:text-secondary
                        shadow-2xl hover:shadow-indigo-500/50 duration-1000
                        "/>
          </label>
          <br />
          {/* BUTTON */}
          <TERipple rippleColor="white">
            {form.name.trim() !== ''
              && form.email.trim() !== ''
              && form.message.trim() !== '' ? (
              <button
                onClick={handleSubmit}
                type="submit"
                className="
              bg-gray-900/50
              mt-4 
              py-3 
              px-8 
              hover:bg-gray-900/100
              outline-none 
              w-fit 
              text-white 
              font-bold 
              rounded-full
              shadow-2xl 
              hover:shadow-indigo-500
              duration-1000
              "

              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            ) : (
              <button
                disabled
                className="
            bg-gray-900/50
            mt-4 
            py-3 
            px-8 
            hover:bg-gray-900/100
            outline-none 
            w-fit 
            text-white 
            font-bold 
            rounded-full
            shadow-2xl 
            hover:shadow-indigo-500
            duration-1000
            "

              >
                fill me
              </button>
            )}
          </TERipple>
        </form>
      </div>
      {/* CANVAS */}
      <div
        className="xl:flex-1 xl:h-auto md:h-[750px] h-[450px] rounded-full">
        <EarthCanvas isMobile={isMobile} />
      </div>
      {/* CANVAS */}

      {modalOpen ? <ContactModal form={forms} className='z-50' /> : ""}
    </div >
  )
}
export default SectionWrapper(Contact, 'contact')
