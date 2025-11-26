import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'      // Tailwind y estilos globales
import './styles/theme.css'      // ⬅️ variables de tema (light/dark)
import { ThemeProvider } from './theme/ThemeProvider.jsx'  // ⬅️ provider de tema

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)