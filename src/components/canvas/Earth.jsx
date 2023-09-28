import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"

import CanvasLoader from '../Loader'

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  <Canvas
    shadows
    frameloop="demand"
  >

  </Canvas>
}

export default EarthCanvas