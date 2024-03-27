import { useEffect, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'
import UpcomingTasks from '../components/UpcomingTasks'
import CategoryList from '../components/CategoryList'

const Dashboard = () => {
  const { auth } = useAuth()
  const { dashboardData, loading } = useDashboard()
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

    <div className="px-1 w-full pr-4">
      <div className="flex flex-col lg:flex-row w-[100%] items-center justify-between sm:space-x-2 space-y-5">
        <div className={`w-full lg:w-[40%] z-10 ${greeting === 'Good Morning' || greeting === 'Good Afternoon' ? 'bg' : 'bg2' } h-80 sm:h-96 rounded-xl`}>
          <div className="bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(50,50,50,0.1)] w-full h-full p-4 pt-6 space-y-7
          rounded-xl text-left">
            <h1 className="text-xl sm:text-2xl dark:text-gray-300 font-bold mb-4"> {greeting}, {auth.user.username} </h1>
            <h1 className="text-lg sm:text-xl dark:text-gray-300">You have {dashboardData.pending_tasks} pending tasks </h1>

            <div className="float-right mt-6 pb-7  w-[70%] h-[50%] md:h-[60%] data overflow-y-auto">
              <UpcomingTasks data={dashboardData} />
            </div>
          </div>
        </div>

         <div className={`lg:w-[60%] w-[100%] h-80 sm:h-96 rounded-2xl mr-2 md:mr-4 lg:mr-0 lg:border-none shadow-2xl dark:shadow-black shadow-gray-400`}>
          <Calendar className="w-full" value={date} onChange={(e) => setDate(e.value)} inline />
        </div>
      </div>

      <div className='mt-12 md:mt-20 p-3'>
        <h1 className='text-lg md:text-xl text-gray-500 my-4 font-bold'> Your Categories</h1>
        <div className='category-list'>
          <CategoryList categoryData={dashboardData.categories} loading={loading} className="category-list-box dark:shadow-black" />
        </div>
      </div>

    </div>
    </>

  )
}

export default Dashboard