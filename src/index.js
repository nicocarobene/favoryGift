import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')
const render = createRoot(root)
render.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
