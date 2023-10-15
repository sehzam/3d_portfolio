import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from '../../section/Loader'
import { useIsMobile } from '../../../context/MobileContext'

const Laptop = () => {
    const isMobile = useIsMobile()

    const laptop = useGLTF('/models/laptop/scene.gltf')
    return (
        <primitive
            object={laptop.scene}
            scale={isMobile ? 0.02 : 0.02}
            position={isMobile ? [0, 0, 0] : [0, 0, 0]}
            rotation={isMobile ? [-1, 2, 1] : [-1, 2, 1]}
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
                    enablePan={false}
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