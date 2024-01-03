import { createContext, useState, useEffect } from 'react'
import axios from '../api/axios'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : {})
  const [loading, setLoading] = useState(true)
  
  const updateToken = async () => {
    console.log('token;updated')
    try {
        const response = await axios.post('/login/refresh/', 
          JSON.stringify({ 'refresh': auth.refresh }),
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
        console.log('tokennnsnn', updatedTokens)
        
        localStorage.setItem('authTokens', JSON.stringify(updatedTokens))
        
      } catch (err) {
        if (!err?.response) {
          console.log('no server response')
        } else if (err.response.status === 400) {
          console.log(err.response.data.error)
        } else {
          console.log('Request Failed')
        }
      }
  }
  
  useEffect(() => {
    const fourMinutes = 1000 * 60 * 4;
    
    const interval = setInterval(() => {
      auth && updateToken()
    }, fourMinutes);
    return () => clearInterval(interval)
  }, [auth, loading])
  
  return (
      <AuthContext.Provider value={{ auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext