import { createContext, useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import useAuth from '../hooks/useAuth'

const DashboardContext = createContext({})

export const DashboardProvider = ({ children }) => {
   const [dashboardData, setDashboardData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {})
   const [loading, setLoading]= useState(true)
   const { auth } = useAuth()
  // const [dashboardData, setDashboardData] = useState({})
  
  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/dashboard/')
      console.log('DashboardData', response.data)
      setDashboardData(response.data)
      localStorage.setItem('data', JSON.stringify(response.data))
    } catch (err) {
        if (err.response.status === 401) {
          console.log(err.response.data.error)
          fetchdata()
        } else {
          console.log('Request Failed')
        }
    } finally {
      setLoading(false)
    }
    
  }
  
  useEffect(() => {
    if (auth.access) {
      fetchdata()
    }
  }, [auth])
  
  return (
        <DashboardContext.Provider value={{ dashboardData }}>
          { children }
        </DashboardContext.Provider>
      )
}
export default DashboardContext