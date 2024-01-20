import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'

const Dashboard = () => {
  const { auth } = useAuth()
  const data = useAuth()
  
  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    <div className="bg-blue-300 h-screen w-full flex flex-wrap">
    <h1 className="text-2xl text-blue"> Hi { auth.user.username } </h1>
    </div>
  )
}

export default Dashboard