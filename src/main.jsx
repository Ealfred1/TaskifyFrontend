import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider'
import { DashboardProvider } from './context/DashboardProvider'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
      <AuthProvider>
      <ScrollToTop />
      <ToastContainer />
      <DashboardProvider>
        <App />
      </DashboardProvider>
      </AuthProvider>
      </Router>
  </React.StrictMode>,
)
