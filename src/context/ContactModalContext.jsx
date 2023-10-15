import { createContext, useContext, useState, useEffect } from 'react'

const ContactModalContext = createContext()

export const ContactModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }


    return (
        <ContactModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
            {children}
        </ContactModalContext.Provider>
    )
}

export const useIsContactModal = () => {
    return useContext(ContactModalContext)
}