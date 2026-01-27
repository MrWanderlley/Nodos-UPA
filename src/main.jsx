import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Grafos from './Grafos.jsx'
import './styles/index.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grafos />
  </StrictMode>,
)
