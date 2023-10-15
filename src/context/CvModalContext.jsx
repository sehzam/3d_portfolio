import { createContext, useContext, useState, useEffect } from 'react'

const CvModalContext = createContext()

export const CvModalProvider = ({ children }) => {
    const [modalCvOpen, setCvModalOpen] = useState(false)

    const openCvModal = () => {
        setCvModalOpen(true)
    }

    const closeCvModal = () => {
        setCvModalOpen(false)
    }


    return (
        <CvModalContext.Provider value={{ modalCvOpen, openCvModal, closeCvModal }}>
            {children}
        </CvModalContext.Provider>
    )
}

export const useIsCvModal = () => {
    return useContext(CvModalContext)
}