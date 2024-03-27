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
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';


(() => {
  setInterval(() => {
     const mode = JSON.parse(localStorage.getItem('dark'))
  if (mode === true) {
    import ('primereact/resources/themes/lara-dark-indigo/theme.css');
    //import 'primereact/resources/themes/lara-light-indigo/theme.css'
  } else if (mode === false) {
      import ('primereact/resources/themes/lara-light-indigo/theme.css')
  }
  }, 1)
 
})()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
      <AuthProvider>
      <ScrollToTop />
      <ToastContainer />
      <DashboardProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
      </DashboardProvider>
      </AuthProvider>
      </Router>
  </React.StrictMode>,
)
