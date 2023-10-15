import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from '../../section/Loader'

const Earth = ({ isMobile }) => {

  const earth = useGLTF('planet/scene.gltf')
  // alert(isMobile)
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2.8 : 2.5}
      position={isMobile ? [0, 0, 0] : [0, 0, 0]}
      rotation={isMobile ? [-1, 2, 1] : [-1, 2, 1]}
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
        <ambientLight intensity={3} />

        <OrbitControls
          autoRotate
          enablePan={false}
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