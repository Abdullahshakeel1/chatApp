import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AutContextProvider } from './context/AutContext.jsx'
import { SocketContextProvider } from './context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
<BrowserRouter>
<AutContextProvider >
<SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AutContextProvider >

  </BrowserRouter>
  </StrictMode>
)
