import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { LaptopCanvas, SwirlCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useIsMobile } from '../MobileContext'

const Contact = () => {
  const isMobile = useIsMobile()

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_musoivo',
      'template_7drsa9g',
      {
        from_name: form.name,
        to_name: "Kadir",
        from_email: form.email,
        to_email: "sehzam@gmail.com",
        message: form.message,
      },
      'K0Rthvp5MCNmbaHIL'
    ).then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: "",
        email: "",
        message: "",
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert("Something went wrong.")
      })
    })
  }
  return (
    <div className="bg-tertiary rounded-2xl xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.8] bg-black-100 p-10 rounded-2xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/50"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>· Contact ·</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-black-200 py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-black-200 py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              cols='10'
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What want you tell me? Thanks a lot for your Feedback!"
              className="bg-black-200 py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="bg-black-200 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <LaptopCanvas isMobile={isMobile} />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')