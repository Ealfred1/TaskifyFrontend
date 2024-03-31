import { useState, useEffect } from 'react'
import humanizeTime from '../utils/humanizeTime'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"

const TaskList = ({ data, loading, className, getTasks }) => {
	const [taskCompleted, setTaskCompleted] = useState(false)

	const handleTaskCompleted = async (id, status) => {
		console.log(taskCompleted)
		try {
	      const response = await axiosPrivate.get(`/tasks/completed/${id}`)
	      toast.info("Task Completed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      getTasks()
	      // fetchdata()
	    } catch (err) {
	         toast.error("Failed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	        }
	     finally {
	     	console.log('done')
	     }
	}

	useEffect(()=> {
		getTasks()
	}, [loading])
	
	return (
		<div className="w-full">
			<div className="space-y-2">
				{ data.length > 0 && data.map((task) => (
					<div className="flex items-center justify-between px-2 rounded-xl task-list relative h-20" key={task.id}>
						<div className="space-x-3">
							<input type="checkbox" className="accent-white" onChange={() => handleTaskCompleted(task.id, task.completed)} checked={task.completed} />
							<label className="task-label-2">{ task.title }</label>
							<p className="text-[9.5px] pl-3 dark:text-gray-300">{ humanizeTime(task.due_date) }</p>
						</div>
						<div className="flex items-center relative">
							<button className="w-[2rem] h-[2rem] flex items-center justify-center rounded-full hover:bg-purpleP bg-opacity-100 text-right text-white"><span className="pi pi-ellipsis-v text-lg md:text-xl"></span></button>
						</div>
					</div>
				)) }
			</div>
		</div>
	)
}

export default TaskList