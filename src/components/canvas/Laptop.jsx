import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"

import CanvasLoader from '../Loader'
import { useIsMobile } from '../../MobileContext'

const Laptop = () => {
    const isMobile = useIsMobile()

    const laptop = useGLTF('/laptop/asus.gltf')
    return (
        <primitive
            object={laptop.scene}
            scale={isMobile ? 1.8 : 1.3}
            position={isMobile ? [0, 0, 0] : [0, -1, 0]}
            rotation={isMobile ? [0, 1, 0] : [0, 0, 0]}
        />
    )
}

const LaptopCanvas = () => {

    return (

        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true, alpha: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={3} />
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Laptop />
            </Suspense>
            <Preload all />

        </Canvas>
    )
}

export default LaptopCanvas