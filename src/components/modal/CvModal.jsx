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
import { useIsCvModal } from "../../context/CvModalContext"
import { Resume, Code } from "../resume/Resume"

import { back, close, pdf, convert } from '/src/assets/'
const CvModal = () => {
    const { modalCvOpen, closeCvModal, openCvModal } = useIsCvModal()
    const [toggle, setToggle] = useState(false)

    const handleConvert = () => {
        setToggle(!toggle)
    }

    return (

        <TEModal
            show={modalCvOpen}
            setShow={closeCvModal}
            scrollable
        >
            <TEModalDialog size="fullscreen" className="rounded-xl">
                <TEModalContent className="rounded-xl p-[0.2px] ">
                    <nav className="bg-black">
                        <ul className="bg-black flex flex-row justify-around mt-3 mb-2">
                            {toggle ? (
                                <li>
                                    <div className="oceanBorder rounded-xl">
                                        <button
                                            className="bg-black m-[0.1px] text-white text-xl p-2 rounded-xl"
                                            type="button" onClick={() => {
                                                setToggle(!toggle)
                                            }}
                                        >

                                            <img src={back} alt="back" className="w-16" />
                                        </button>
                                    </div>
                                </li>

                            ) : <div className="w-16"></div>
                            }
                            <li>


                                <div className="oceanBorder rounded-xl ">
                                    <button
                                        className="bg-black m-[0.1px] text-white text-xl py-1 px-1 rounded-xl"
                                        type="button"
                                        onClick={() => {
                                            closeCvModal()
                                        }}>

                                        <img src={close} alt="close" className="w-16" />
                                    </button>
                                </div>


                            </li>
                            <li>
                                {toggle ? (
                                    <div className="oceanBorder rounded-xl">
                                        <a href="cv.pdf">
                                            <button
                                                className="flex flex-row items-center bg-black m-[0.1px] text-white text-xl p-2 rounded-xl"
                                                type="button">
                                                <img src={pdf} alt="pdf" className="w-16" />
                                            </button>
                                        </a>
                                    </div>
                                ) :
                                    (<div className="oceanBorder  rounded-xl">

                                        <button
                                            className="flex flex-row items-center bg-black m-[0.01px] text-white text-xl  p-2 rounded-xl"
                                            type="button"
                                            onClick={() => {
                                                handleConvert()
                                            }}>
                                            <img src={convert} alt="convert" className="w-16" />
                                        </button>
                                    </div>)
                                }
                            </li>
                        </ul>
                    </nav>


                    {/* <!--Modal body--> */}
                    <TEModalBody className="bg-black">
                        <div className=" rounded-xl p-[0.2px] skyBorder ">
                            <div className=" rounded-xl p-[0.2px] bg-black">
                                {!toggle ? <Code /> : <img src="cv.png" alt="CV" className="rounded-xl md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px] " />}
                                {/* <Resume /> */}
                            </div>
                        </div>
                    </TEModalBody>

                </TEModalContent>
            </TEModalDialog>
        </TEModal>

    )
}
export default CvModal