import { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : {})
  
  return (
      <AuthContext.Provider value={{ auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext