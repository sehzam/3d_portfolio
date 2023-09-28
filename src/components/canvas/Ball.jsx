import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader'
import { SphereGeometry } from 'three'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  const meshRef = useRef()
  const geometry = new SphereGeometry(1, 32, 32) // Erstellt eine Kugelgeometrie

  useEffect(() => {
    // Animation: Drehen der Seite mit dem Logo nach 1 Sekunde
    const timeoutId = setTimeout(() => {
      meshRef.current.rotation.set(0, 0, 0) // Setze die Rotation zurück
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef} geometry={geometry}>
        <sphereGeometry />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
