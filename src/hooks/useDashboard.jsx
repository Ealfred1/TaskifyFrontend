import { useContext } from 'react'
import DashboardContext from '../context/DashboardProvider'

const useDashboard = () => {
  return useContext(DashboardContext)
}

export default useDashboard