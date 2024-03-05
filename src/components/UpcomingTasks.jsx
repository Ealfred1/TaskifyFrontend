import { useState } from 'react'

const UpcomingTasks = ({ data }) => {
  const getUpcomingTasks = () => {
    const today = new Date()

    return (
      <div>
        {data?.recent_tasks && data?.recent_tasks.length > 1 && data?.recent_tasks.filter((task) => new Date(task.due_date) >= today).length > 0 ?  (
          <div>
          <h1 className="text-xl sm:text-2xl text-gray-800 font-bold">Upcoming tasks</h1>
            {data.recent_tasks
              .filter((task) => new Date(task.due_date) >= today)
              .map((task) => (
                <div key={task.id} className='upcoming'>
                  <h1 className="text-xs md:text-lg text-gray-800 font-semibold">{task.title}</h1>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-xl sm:text-2xl text-gray-800">No upcoming tasks</p>
        )}
      </div>
    )
  }

  return getUpcomingTasks()
}

export default UpcomingTasks
