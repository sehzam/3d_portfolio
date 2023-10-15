import React, { Component } from 'react'

class DoubleFingerGesture extends Component {
    state = {
        x: 0,
        y: 0
    };

    handleGestureMove = (event) => {
        // Hier kannst du die Gestik-Informationen verarbeiten und den Mauszeiger simulieren
        const x = event.touches[0].clientX
        const y = event.touches[0].clientY

        this.setState({ x, y })
    };

    render() {
        const { x, y } = this.state
        const cursorStyle = {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: '20px',
            height: '20px',
            background: 'red', // Hier kannst du das Aussehen des simulierten Cursors anpassen
            borderRadius: '50%',
            pointerEvents: 'none', // Damit der Cursor keine Klicks abfängt
        }

        return (
            <div
                onTouchMove={this.handleGestureMove}
                style={{ width: '100vw', height: '100vh', position: 'relative' }}
            >
                <div style={cursorStyle} />
            </div>
        )
    }
}

export default DoubleFingerGesture
