import { createContext, useState, useEffect } from 'react'
import axios from '../api/axios'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : {})
  const [loading, setLoading] = useState(true)
  
  const updateToken = async () => {
    console.log('token updated')
    try {
        const response = await axios.post('/login/refresh/', 
          JSON.stringify({ 'refresh': JSON.parse(localStorage.getItem('authTokens')).refresh }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )
        
        setAuth(prevAuth => ({
          ...prevAuth,
          access: response.data.access,
          refresh: response.data.refresh
        }))
        
        const updatedTokens = {
          ...auth,
          access: response.data.access,
          refresh: response.data.refresh
        }
        console.log('updatedTokens', updatedTokens)
        
        localStorage.setItem('authTokens', JSON.stringify(updatedTokens))
        console.log(localStorage.getItem('authTokens'))
        
      } catch (err) {
        if (!err?.response) {
          console.log('no server response')
        } else if (err.response.status === 400) {
          console.log(err.response.data.error)
        } else {
          console.log('Request Failed')
         // logout()
           updateToken()
        }
      } finally {
        setLoading(false)
      }
      setLoading(false)
  }
  
  const logout = () => {
    setAuth({})
    localStorage.removeItem('authTokens')
    toast.info("You've been logged out", {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  
  useEffect(() => {
    { loading && updateToken() }
    console.log(localStorage.getItem('authTokens'))
    const fourMinutes = 1000 * 60 * 4;
    
    const interval = setInterval(() => {
      auth && updateToken()
    }, fourMinutes);
    return () => clearInterval(interval)
  }, [auth, loading])
  
  return (
      <AuthContext.Provider value={{ auth, setAuth, logout }}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext