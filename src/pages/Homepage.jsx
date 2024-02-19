import { Calendar } from 'primereact/calendar'
import { useState } from 'react'

const Homepage = () => {

  const [date, setDate] = useState(null)

  return (
      <div className="card flex justify-center">
          <Calendar className="cal" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
      </div>
  )
}

export default Homepage
