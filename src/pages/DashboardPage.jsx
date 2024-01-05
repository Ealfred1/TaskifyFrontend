import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import axiosPrivate from '../api/axiosPrivate'

const Dashboard = () => {
  const { auth } = useAuth()
  
  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/dashboard/')
      console.log(response.data)
      
    } catch (err) {
      console.log('error', err)
    }
  }
  
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
    <div className="bg-blue-300 h-screen w-full flex flex-wrap">
    <h1 className="text-2xl text-blue"> Hi { auth.user.username } </h1>
    </div>
  )
}

export default Dashboard