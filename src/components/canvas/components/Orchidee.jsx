import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"

import CanvasLoader from '../../section/Loader'

const Orchidee = ({ isMobile }) => {
  // const erde = useGLTF('models/animal/shiba/scene.gltf')
  const orchidee = useGLTF('orchid_flower/scene.gltf')
  // alert(isMobile)
  return (
    <primitive
      object={orchidee.scene}
      scale={isMobile ? 0.3 : 0.3}
      position={isMobile ? [0, -1.8, 0] : [0, -1.8, 0]}
      rotation={isMobile ? [0, 0, 0] : [0, 0, 0]}
    />
  )
}

const OrchideeCanvas = ({ isMobile }) => {
  return (

    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={4} />

        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Orchidee isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default OrchideeCanvas