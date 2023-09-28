import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import * as dat from 'dat.gui' // Importieren Sie dat.GUI
import CanvasLoader from '../Loader'


const Portal = ({ isMobile }) => {
    const portal = useGLTF('/portal/portal.gltf')


    const [portalProps, setPortalProps] = useState({
        scale: 0.40,
        position: [4, -2.3, 0.2],
        rotation: [-0.01, 1.63, 0.11],
    })

    // Funktion zum Aktualisieren der Portal-Eigenschaften
    const updatePortalProps = (newProps) => {
        setPortalProps({ ...portalProps, ...newProps })
    }

    // Verwenden Sie useEffect, um dat.GUI zu erstellen und zu aktualisieren
    useEffect(() => {
        const gui = new dat.GUI()
        gui.close() // Hide completely

        // Regler für Skalierung
        gui.add(portalProps, 'scale', 0, 2).onChange((value) => updatePortalProps({ scale: value }))

        // Regler für Position
        const positionFolder = gui.addFolder('Position')
        positionFolder.add(portalProps.position, '0', -5, 5).onChange((value) => updatePortalProps({ position: [value, portalProps.position[1], portalProps.position[2]] }))
        positionFolder.add(portalProps.position, '1', -5, 5).onChange((value) => updatePortalProps({ position: [portalProps.position[0], value, portalProps.position[2]] }))
        positionFolder.add(portalProps.position, '2', -5, 5).onChange((value) => updatePortalProps({ position: [portalProps.position[0], portalProps.position[1], value] }))
        positionFolder.open()

        // Regler für Rotation
        const rotationFolder = gui.addFolder('Rotation')
        rotationFolder.add(portalProps.rotation, '0', -Math.PI, Math.PI).onChange((value) => updatePortalProps({ rotation: [value, portalProps.rotation[1], portalProps.rotation[2]] }))
        rotationFolder.add(portalProps.rotation, '1', -Math.PI, Math.PI).onChange((value) => updatePortalProps({ rotation: [portalProps.rotation[0], value, portalProps.rotation[2]] }))
        rotationFolder.add(portalProps.rotation, '2', -Math.PI, Math.PI).onChange((value) => updatePortalProps({ rotation: [portalProps.rotation[0], portalProps.rotation[1], value] }))
        rotationFolder.open()

        return () => {
            gui.destroy() // dat.GUI bereinigen, wenn die Komponente unmontiert wird
        }
    }, []) // Leeres Abhängigkeitsarray sorgt dafür, dass useEffect nur einmal ausgeführt wird

    // Funktion zum Aktualisieren der Portal-Eigenschaften mit neuer Rotation
    const updatePortalRotation = (newRotation) => {
        setPortalProps({ ...portalProps, rotation: newRotation })
    }

    // Verwenden Sie useFrame, um eine Animation für das Portal zu erstellen
    useFrame(() => {
        // Aktuelle Rotation des Portals
        const currentRotation = portalProps.rotation

        // Neue Rotation, indem wir den Wert für die Y-Achse manuell erhöhen
        const newRotation = [
            currentRotation[0], // X-Achse bleibt unverändert
            currentRotation[1] + 0.01, // Manuell erhöhter Wert für die Y-Achse
            currentRotation[2], // Z-Achse bleibt unverändert
        ]

        // Aktualisieren Sie die Portalrotation
        updatePortalRotation(newRotation)
    })

    return (
        <mesh scale={portalProps.scale} position={portalProps.position} rotation={portalProps.rotation}>
            <hemisphereLight intensity={1} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-2, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive object={portal.scene} />
            <OrbitControls enableZoom={false} enabled={false} />
        </mesh>
    )
}

const PortalCanvas = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        //  Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width:500)')

        // Set the initial value of the 'isMobile' state variable
        setIsMobile(mediaQuery.matches)

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches)
        }

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange)

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Portal isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default PortalCanvas
