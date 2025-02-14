import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context_Hook from './context.jsx'

createRoot(document.getElementById('root')).render(
  <Context_Hook>
    <App />
  </Context_Hook>
)
