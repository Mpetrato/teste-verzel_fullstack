import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
)
