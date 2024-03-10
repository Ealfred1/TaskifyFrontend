import { useState } from 'react'

const UpcomingTasks = ({ data }) => {
  const getUpcomingTasks = () => {
  const today = new Date()
    
  const humanizeTime = (dueDate) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const taskDate = new Date(dueDate);

    if (taskDate.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (taskDate.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      // You can customize this part based on your needs
      return taskDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });
    }
  };

    return (
      <div className="h-full">
        {data?.recent_tasks && data?.recent_tasks.length > 1 && data?.recent_tasks.filter((task) => new Date(task.due_date) >= today).length > 0 ?  (
          <div className="">
          <h1 className="text-xl sm:text-2xl text-gray-800 font-bold">Upcoming tasks</h1>
            {data.recent_tasks
              .filter((task) => new Date(task.due_date) >= today)
              .map((task) => (
                <div key={task.id} className='upcoming'>
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
