import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// index.html의 <div id="root">에 앱을 마운트
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
