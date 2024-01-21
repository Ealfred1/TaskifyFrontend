import { createContext, useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'

const DashboardContext = createContext({})

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {})
  
  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/dashboard/')
      console.log('data', response.data)
      setDashboardData(response.data)
      localStorage.setItem('data', JSON.stringify(response.data))
    } catch (err) {
      console.log('error', err)
    }
  }
  
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
        <DashboardContext.Provider value={{ dashboardData }}>
          {children}
        </DashboardContext.Provider>
      )
}
export default DashboardContext