import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useTasks from '../hooks/useTasks'
import TaskList from '../components/TaskList'
// import { Dropdown } from 'primereact/dropdown'


const CalendarPage = () => {
	const [date, setDate] = useState(new Date())
	const { taskData, loading, getTasks } = useTasks()
	console.log(new Date(date), 'dd', new Date())
	return (
		<div className="w-full px-2 mb-6">
		<h1 className="text-center text-gray-400 mb-2 text-lg">Select Dates on the calendar to filter tasks by Due Date</h1>
          <Calendar className="w-full" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
          
          <div className="mt-5">
          	<TaskList data={taskData.length > 0 && taskData.filter((task) => new Date(task.due_date).toDateString() === date.toDateString())}
   						loading={loading} 
						getTasks={getTasks} />
          </div>
      </div>
	)
}

export default CalendarPage