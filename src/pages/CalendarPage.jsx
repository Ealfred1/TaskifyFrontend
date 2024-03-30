import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
// import { Dropdown } from 'primereact/dropdown'


const CalendarPage = () => {
	const [date, setDate] = useState(null)
	console.log(date)

	return (
		<div className="flex justify-center w-full">
          <Calendar className="" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
          {/*<Dropdown />*/}
      </div>
	)
}

export default CalendarPage