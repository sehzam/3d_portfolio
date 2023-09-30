import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"

import CanvasLoader from '../Loader'

const Earth = ({ isMobile }) => {
  const earth = useGLTF('/planet/scene.gltf')
  // alert(isMobile)
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.5 : 1.8}
      position={isMobile ? [0, -1, 0] : [0, -0.5, 2.5]}
      rotation={isMobile ? [0, 0, 0] : [0, 0, 0]}
    />
  )
}

const EarthCanvas = ({ isMobile }) => {
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
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default EarthCanvas