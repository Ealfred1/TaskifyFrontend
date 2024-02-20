import { useEffect, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'
import UpcomingTasks from '../components/UpcomingTasks'

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
      <div className="flex flex-col lg:flex-row w-[100%] items-center justify-between sm:space-x-2 space-y-5">
        <div className={`w-full lg:w-[60%] z-10 ${ greeting === 'Good Morning' && 'Good Afternoon' ? 'bg' :
        'bg2' } h-80 sm:h-96 rounded-xl`}>
          <div className="bg-[rgba(255,255,255,0.2)] w-full h-full p-4 pt-6 space-y-7
          rounded-xl text-left">
            <h1 className="text-xl sm:text-2xl text-gray-800 font-bold mb-4"> {greeting}, {auth.user.username} </h1>
            <h1 className="text-lg sm:text-xl text-gray-900">You have {dashboardData.pending_tasks} pending tasks </h1>

            <div className="">
              <UpcomingTasks data={dashboardData} />
            </div>
          </div>
        </div>

         <div className={`lg:w-[40%] h-80 sm:h-96 rounded-2xl border border-gray-400 mr-2 md:mr-4 lg:border-none shadow-lg shadow-gray-300`}>
          <Calendar className="w-full sm:w-auto" value={date} onChange={(e) => setDate(e.value)} inline />
        </div>
      </div>
    </div>
    </>

  )
}

export default Dashboard