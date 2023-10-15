import React, { useState } from "react"
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
} from "tw-elements-react"
import { useIsContactModal } from "../../context/ContactModalContext"
import { useIsCvModal } from "../../context/CvModalContext"
import { motion } from "framer-motion"
import { cv } from '../../assets'
import { back, close, pdf, convert } from '/src/assets/'

const ContactModal = ({ form }) => {
    const { modalOpen, closeModal, openModal } = useIsContactModal()
    const { modalCvOpen, closeCvModal, openCvModal } = useIsCvModal()


    return (
        <TEModal
            show={modalOpen}
            setShow={closeModal}
            scrollable
        >
            <TEModalDialog size="fullscreen" className=" bg-black-100 ">
                <TEModalContent style={{ justifyContent: 'center', backgroundColor: "black" }} className="
                             bg-black-100">
                    <nav className="bg-black">
                        <ul className="bg-black flex flex-row justify-around mt-3 mb-2">
                            <li>
                                <div className="oceanBorder rounded-xl">
                                    <button
                                        className="bg-black m-[0.1px] text-white text-xl p-2 rounded-xl"
                                        type="button"
                                        onClick={() => {
                                            openCvModal()
                                        }}
                                    >

                                        <img src={cv} alt="cv" className="w-16" />
                                    </button>
                                </div>
                            </li>

                            <li>


                                <div className="oceanBorder rounded-xl ">
                                    <button
                                        className="bg-black m-[0.1px] text-white text-xl py-1 px-1 rounded-xl"
                                        type="button"
                                        onClick={() => {
                                            closeModal()
                                        }}
                                    >

                                        <img src={close} alt="close" className="w-16" />
                                    </button>
                                </div>


                            </li>
                            <li>
                                <div className="w-16"></div>
                            </li>
                        </ul>
                    </nav>
                    {/* <!--Modal body--> */}
                    <TEModalBody className="
                             bg-black-100">
                        <div className="
                        text-white
                        rounded-2xl
                            px-10 
                            text-[14px]
                            text-center 
                            leading-[3rem]
                            bg-gray-800/50
                            f01
                            ">
                            <br />
                            Thank you very much
                            Dear
                            <div className="oceanBorder rounded-2xl mx-1 ">
                                <h3 className="f27 p-2 text-[40px] rounded-2xl text-center bg-black">
                                    {form.name}

                                </h3>
                            </div>

                            for your contact request.
                            <br />
                            I'll be sure to respond promptly and provide the information you need
                            <br />
                            to your mail address :
                            <div className="skyBorder rounded-2xl mx-1 ">
                                <h3 className="f36 p-2 rounded-2xl text-center text-[36px] bg-black">
                                    {form.email}

                                </h3>
                            </div>

                            Your inquiry is important to me,
                            <br />
                            and I appreciate your patience as
                            <br />
                            I gather the necessary details to assist you by your request:
                            <br />
                            <div className="skyBorder rounded-2xl mx-1 ">
                                <h3 className="f65 p-2 rounded-2xl text-center text-[28px] bg-black">
                                    {form.message}

                                </h3>
                            </div>
                            <br />

                        </div>
                    </TEModalBody>
                </TEModalContent>
            </TEModalDialog>
        </TEModal>
    )
}
export default ContactModal