import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from '../../section/Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/models/desktop_pc/scene.gltf')
  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 1.5 : 1}
      position={isMobile ? [0, -1, 0] : [0, 0, 0]}
      rotation={isMobile ? [-0.1, -0.2, -0.1] : [-0.1, -0.2, -0.1]}
    />
  )
}

const ComputersCanvas = ({ isMobile }) => {
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
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas