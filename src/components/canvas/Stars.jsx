import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import { inSphere } from "maath/random"
import * as THREE from "three"

const Stars = () => {
  const ref = useRef()
  const [sphere] = useState(
    () => inSphere(new Float32Array(1000), { radius: 1.3 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  const randomRGBColor = () => {
    const r = Math.floor(Math.random() * 256) // Zufälliger Wert zwischen 0 und 255
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})` // Generiere den RGB-String
  }

  const randomColor = new THREE.Color(randomRGBColor()) // Konvertiere den RGB-String in ein THREE.Color-Objekt

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={randomColor} // Verwende das THREE.Color-Objekt als Farbe
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
