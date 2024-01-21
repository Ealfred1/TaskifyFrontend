import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'

const Dashboard = () => {
  const { auth } = useAuth()
  const { dashboardData } = useDashboard()
  const [greeting, setGreeting] = useState('')
  
  useEffect(() => {
    const getCurrentTime = () => {
      const hour = new Date().getHours()
      if (hour >= 0 && hour < 12) {
        setGreeting('Good Morning')
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good Afternoon')
      } else {
        setGreeting('Good Evening')
      }
    }

    getCurrentTime()
  }, [])

  return (
    <div className="h-screen w-[25.8rem] sm:w-full px-1">
      <div className="flex items-center justify-center">
        <div className="w-full bg-blue-100 h-80 sm:h-72 p-6 space-y-7 rounded-xl ">
          <h1 className="text-2xl text-gray-800 font-bold mb-4"> {greeting}, {auth.user.username} </h1>
          <h1 className="text-xl text-gray-500">You have {dashboardData.pending_tasks} pending tasks </h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard