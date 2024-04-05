import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import useTasks from '../hooks/useTasks'
// import { Dropdown } from 'primereact/dropdown'


const CalendarPage = () => {
	const [date, setDate] = useState(null)
	const { taskData, loading } = useTasks()
	console.log(new Date(date), 'dd', new Date())
	return (
		<div className="w-full px-2">
          <Calendar className="w-full" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
          
          <div className="">
          	{ taskData.length > 0 && taskData.filter((task) => new Date(task.due_date) === new Date(date)).map((task) => (
          		<div className="text-2xl text-white" key={task.id}>
          			{ task.title }
          		</div>
          	)) }
          </div>
      </div>
	)
}

export default CalendarPage