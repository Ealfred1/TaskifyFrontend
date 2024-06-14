import { useEffect, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useAuth from '../hooks/useAuth'
import useDashboard from '../hooks/useDashboard'
import useTasks from '../hooks/useTasks'
import axiosPrivate from '../api/axiosPrivate'
import UpcomingTasks from '../components/UpcomingTasks'
import CategoryList from '../components/CategoryList'
import TaskList from '../components/TaskList'
import Music from '../assets/music.mp3'

const Dashboard = () => {
  const { auth } = useAuth()
  const { dashboardData, loading } = useDashboard()
  const { categoryData, loading:taskLoading, getTasks } = useTasks()
  const [greeting, setGreeting] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [date, setDate] = useState(null)

    // useEffect(() => {
    //     // Create an audio element and play the background music
    //     const audio = new Audio(Music);
    //     audio.play();
    //     console.log("playing")

    //     // Clean up the audio element on component unmount
    //     return () => {
    //         audio.pause();
    //         audio.currentTime = 0;
    //     };
    // }, []);
  

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    setCurrentDate(formattedDate)
  }, [])


  useEffect(() => {
    const speakWelcome = () => {
      const message = new SpeechSynthesisUtterance(`Hello there! Welcome to Taskify!!!`)
      window.speechSynthesis.speak(message)
    }
    speakWelcome()
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
          <div className="bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(50,50,50,0.2)] w-full h-full p-4 pt-6 space-y-7
          rounded-xl text-left">
            <h1 className={`text-xl sm:text-2xl ${greeting === 'Good Morning' || greeting === 'Good Afternoon' ? 'dark:text-gray-900' : 'dark:text-gray-300'}  font-bold mb-4`}> {greeting}, {auth.user.first_name} </h1>
            <h1 className={`text-lg sm:text-xl ${greeting === 'Good Morning' || greeting === 'Good Afternoon' ? 'dark:text-gray-900' : 'dark:text-gray-300'} dark:text-gray-300`}>You have {dashboardData.pending_tasks} pending tasks </h1>

            <div className="float-right mt-6 pb-7  w-[80%] h-[50%] md:h-[60%] data overflow-y-auto">
              <UpcomingTasks data={dashboardData} />
            </div>
          </div>
        </div>

         <div className={`lg:w-[60%] w-[100%] h-80 sm:h-96 rounded-2xl md:mr-2 lg:mr-0 lg:border-none shadow-2xl dark:shadow-black shadow-gray-400`}>
          <Calendar className="w-full h-80 sm:h-96 lg:h-auto" value={date} onChange={(e) => setDate(e.value)} inline />
        </div>
      </div>

      <div className="w-full mt-12 md:mt-20 p-3">
        <h1 className="text-lg md:text-xl text-gray-500 my-4 font-semibold">Task Summary</h1>
        <div className="flex flex-wrap gap-4">
          <div className="box-stat">
            <div className="h-full flex items-center text-white justify-center gap-2 text-sm md:text-lg font-bold">
              <span className="pi pi-check-square font-bold"></span>
              <h1 className="">Completed Tasks</h1>
            </div>
            <h1 className="text-4xl lg:text-5xl text-white font-semibold">{ dashboardData.completed_tasks }</h1>
          </div>
          <div className="box-stat">
            <div className="h-full flex items-center text-white justify-center gap-2 text-sm md:text-lg font-bold">
              <span className="pi pi-check-square font-bold"></span>
              <h1 className=""> Task  Todo</h1>
            </div>
            <h1 className="text-4xl lg:text-5xl text-white font-semibold">{ dashboardData.task_todo }</h1>
          </div>
          <div className="box-stat">
            <div className="h-full flex items-center text-white justify-center gap-2 text-sm md:text-lg font-bold">
              <span className="pi pi-check-square font-bold"></span>
              <h1 className="">Tasks In Progress</h1>
            </div>
            <h1 className="text-4xl lg:text-5xl text-white font-semibold">{ dashboardData.task_in_progress }</h1>
          </div>
          <div className="box-stat">
            <div className="h-full flex items-center text-white justify-center gap-2 text-sm md:text-lg font-bold">
              <span className="pi pi-check-square font-bold"></span>
              <h1 className="">Total Task Categories</h1>
            </div>
            <h1 className="text-4xl lg:text-5xl text-white font-semibold">{ dashboardData.total_categories }</h1>
          </div>
        </div>
      </div>

      <div className="mt-12 p-3">
        <h1 className="text-lg md:text-xl text-gray-500 my-4 font-bold">Recent Tasks</h1>
        { dashboardData.recent_tasks.length > 0 ? (
            <TaskList data={dashboardData.recent_tasks} loading={taskLoading} getTasks={getTasks} />
          ) : (
              <div className="text-xl text-gray-500">Oops, you don't have any recent tasks yet!!</div>
          ) }
      </div>

      <div className='mt-12 p-3'>
        <h1 className='text-lg md:text-xl text-gray-500 my-4 font-bold'> Your Categories</h1>
        <div className='category-list'>
          <CategoryList categoryData={categoryData} loading={loading} className="category-list-box dark:shadow-black" menuClass='hidden scale-[0]' />
        </div>
      </div>

    </div>
    </>

  )
}

export default Dashboard