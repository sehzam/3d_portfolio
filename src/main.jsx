import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-tippy/dist/tippy.css'
import './styles/index.css'
import './styles/animation.css'
import './styles/font.css'
import "./styles/gradient.css"
import "./styles/gradientlist.css"
import "./styles/class.css"
import "./styles/custom.css"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
