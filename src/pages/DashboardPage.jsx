import { useEffect, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'

const Dashboard = () => {
  const { auth } = useAuth()
  const { dashboardData } = useDashboard()
  const [greeting, setGreeting] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [date, setDate] = useState(null)

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    setCurrentDate(formattedDate)
  }, [])
  
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
    <>

    <div className="px-1 w-full overflow-hidden pr-4">
      <div className="flex flex-col lg:flex-row items-center justify-between sm:space-x-5 space-y-5">
        <div className={`w-full sm:w-[60%] z-10 ${ greeting === 'Good Morning' && 'Good Afternoon' ? 'bg' :
        'bg2' } h-80 sm:h-96 rounded-xl`}>
          <div className="bg-[rgba(255,255,255,0.12)] w-full h-full p-8 space-y-7
          rounded-xl text-center sm:text-left">
            <h1 className="text-2xl text-gray-800 font-bold mb-4"> {greeting}, {auth.user.username} </h1>
            <h1 className="text-xl text-gray-600i>">You have {dashboardData.pending_tasks} pending tasks </h1>
          </div>
        </div>

         <div className={`sm:w-[40%] w-[100%] h-80 sm:h-96 rounded-xl`}>
          <Calendar className="w-full" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>
      </div>
    </div>
    </>

  )
}

export default Dashboard