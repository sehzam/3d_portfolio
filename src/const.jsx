import React, { useState } from 'react'

const DoubleFingerGesture = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleGestureMove = (event) => {
        const x = event.touches[0].clientX
        const y = event.touches[0].clientY
        setCursorPosition({ x, y })
    }

    const cursorStyle = {
        position: 'absolute',
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: '20px',
        height: '20px',
        background: 'red',
        borderRadius: '50%',
        pointerEvents: 'none',
    }

    return (
        <div
            onTouchMove={handleGestureMove}
            style={{ width: '100vw', height: '100vh', position: 'relative' }}
        >
            <div style={cursorStyle} />
        </div>
    )
}

export default DoubleFingerGesture
