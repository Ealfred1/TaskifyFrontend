import { useState } from 'react'
import humanizeTime from '../utils/humanizeTime'

const UpcomingTasks = ({ data }) => {
  const getUpcomingTasks = () => {
  const today = new Date()
  console.log("today",today)
  const [message, setMessage] = useState("")

    return (
      <div className="h-full">
        {data?.recent_tasks && data?.recent_tasks.length >= 0 && data.recent_tasks.filter((task) => new Date(task.due_date).toDateString() === today.toDateString()).length > 0 ? (
          <div className="">
          <h1 className="text-xl sm:text-2xl text-gray-800 font-bold text-right">Upcoming tasks</h1>
            {data.recent_tasks
              .filter((task) => new Date(task.due_date) >= today)
              .map((task) => (
                <div key={task.id} className={`${task.completed === false ? 'upcoming' : 'hidden'}`}>
                  <h1 className="text-xs md:text-lg text-gray-800 font-semibold -mb-1">{task.title}</h1>
                  <small className="text-[0.5rem] md:text-[0.7rem] text-blue-main font-semibold">{humanizeTime(task.due_date)}</small>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-xl sm:text-2xl text-gray-800 text-right">No upcoming tasks</p>
        )}
      </div>
    )
  }

  return getUpcomingTasks()
}

export default UpcomingTasks
