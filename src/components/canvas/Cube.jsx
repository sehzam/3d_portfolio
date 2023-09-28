import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import * as dat from 'dat.gui' // Importieren Sie dat.GUI

import CanvasLoader from '../Loader'

const Cube = () => {
    const [cubeProps, setCubeProps] = useState({
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        color: '#00ff00',
        wireframe: false,
    })

    // Funktion zum Aktualisieren der Würfel-Eigenschaften
    const updateCubeProps = (newProps) => {
        setCubeProps({ ...cubeProps, ...newProps })
    }

    // Verwenden Sie useEffect, um dat.GUI zu erstellen und zu aktualisieren
    useEffect(() => {
        const gui = new dat.GUI()

        // Regler für Position
        const positionFolder = gui.addFolder('Position')
        positionFolder.add(cubeProps.position, '0', -2, 2).onChange((value) => updateCubeProps({ position: [value, cubeProps.position[1], cubeProps.position[2]] }))
        positionFolder.add(cubeProps.position, '1', -2, 2).onChange((value) => updateCubeProps({ position: [cubeProps.position[0], value, cubeProps.position[2]] }))
        positionFolder.add(cubeProps.position, '2', -2, 2).onChange((value) => updateCubeProps({ position: [cubeProps.position[0], cubeProps.position[1], value] }))
        positionFolder.open()

        // Regler für Rotation
        const rotationFolder = gui.addFolder('Rotation')
        rotationFolder.add(cubeProps.rotation, '0', -Math.PI, Math.PI).onChange((value) => updateCubeProps({ rotation: [value, cubeProps.rotation[1], cubeProps.rotation[2]] }))
        rotationFolder.add(cubeProps.rotation, '1', -Math.PI, Math.PI).onChange((value) => updateCubeProps({ rotation: [cubeProps.rotation[0], value, cubeProps.rotation[2]] }))
        rotationFolder.add(cubeProps.rotation, '2', -Math.PI, Math.PI).onChange((value) => updateCubeProps({ rotation: [cubeProps.rotation[0], cubeProps.rotation[1], value] }))
        rotationFolder.open()

        // Regler für Farbe
        gui.addColor(cubeProps, 'color').onChange((value) => updateCubeProps({ color: value }))

        // Checkbox für Wireframe
        gui.add(cubeProps, 'wireframe').onChange((value) => updateCubeProps({ wireframe: value }))

        return () => {
            gui.destroy() // dat.GUI bereinigen, wenn die Komponente unmontiert wird
        }
    }, []) // Leeres Abhängigkeitsarray sorgt dafür, dass useEffect nur einmal ausgeführt wird

    return (
        <mesh position={cubeProps.position} rotation={cubeProps.rotation}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={cubeProps.color} wireframe={cubeProps.wireframe} />
        </mesh>
    )
}

const CubeCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [3, 3, 3], fov: 60 }}
            gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={true} />
                <Cube />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default CubeCanvas
