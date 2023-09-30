import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"

import CanvasLoader from '../Loader'

const Swirl = () => {
    const earth = useGLTF('/swirl/scene.gltf')
    return (
        <primitive
            object={earth.scene}
            scale={1}
            position-y={0}
            position-x={0}
            rotation-y={0}
            rotation-x={0}
        />
    )
}

const SwirlCanvas = () => {
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
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Swirl />
            </Suspense>
        </Canvas>
    )
}

export default SwirlCanvas