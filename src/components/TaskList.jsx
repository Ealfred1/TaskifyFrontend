import { useState, useEffect } from 'react'
import humanizeTime from '../utils/humanizeTime'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"
import TaskDetail from './TaskDetail'
import useDashboard from '../hooks/useDashboard'

const TaskList = ({ data, loading, className, getTasks }) => {
	const [taskCompleted, setTaskCompleted] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)
	const [menuId, setMenuId] = useState(null)
	const [openDetail, setOpenDetail] = useState(false)
	const [detailId, setDeTailId] = useState(null)
	const { fetchdata } = useDashboard()

	const handleMenuClick = (id) => {
		setOpenMenu(!openMenu)
		setMenuId(id)
	}

	const handleOpenDetail = (id) => {
		setOpenDetail(!openDetail)
		setDeTailId(id)
	}

	const handleTaskCompleted = async (id, status) => {
		console.log(taskCompleted)
		try {
	      const response = await axiosPrivate.get(`/tasks/completed/${id}`)
	      toast.info("Task Completed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      getTasks()
	      fetchdata()
	    } catch (err) {
	         toast.error("Failed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	        }
	     finally {
	     	console.log('done')
	     }
	}


	const handleTaskDelete = async (id) => {
		console.log('deleted')
		try {
	      const response = await axiosPrivate.delete(`/tasks/${id}`)
	      toast.info("Task Deleted!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      getTasks()
	      fetchdata()
	    } catch (err) {
	         toast.error("Failed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	        }
	     finally {
	     	console.log('deleted')
	     }
	}

	useEffect(()=> {
		getTasks()
	}, [loading])

	return (
		<div className="w-full">
		<TaskDetail open={openDetail} setOpen={setOpenDetail} id={detailId} />
			<div className="space-y-2">
				{ data.length > 0 && data.map((task) => (
					<div className={`flex items-center justify-between px-2 rounded-xl task-list relative h-20 ${task.completed ? 'opacity-70' : ''}`} key={task.id}>
						<div className="space-x-3">
							<input type="checkbox" className="accent-slate-900 dark:accent-white translate-y-2" onChange={() => handleTaskCompleted(task.id, task.completed)} checked={task.completed} />
							<label className={`task-label-2 ${task.completed ? 'line-through' : ''}`}>{ task.title }</label>
							<div className="flex">
								<p className={`text-[9.5px] pl-3 dark:text-gray-300 ${new Date(task.due_date) < new Date() ? 'text-red-500' : ''}`}><i className="pi pi-calendar-minus text-[9.5px]"></i>  { new Date(task.due_date) < new Date() ? 'Overdue' : '' } { humanizeTime(task.due_date) }</p>
								{ task.reminder.length > 0 &&  (<p className="text-[9.5px] pl-3 dark:text-gray-300 translate-y-[1px]"><i className="pi pi-stopwatch text-[9.5px]"></i> { task.reminder }</p>) }
							</div>
						</div>
						<div className="">
							{/* add the user team pics here */}

						</div>
						<div className="flex items-center relative cursor-pointer">
							<button className="w-[2rem] h-[2rem] relative flex items-center justify-center rounded-full hover:bg-purpleP bg-opacity-100 text-right text-white" onClick={() => handleMenuClick(task.id)}><span className="pi pi-ellipsis-v text-lg md:text-xl"></span></button>
							<div className={`w-[10rem] h-[5rem] py-2 duration-500 absolute top-8 right-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-2xl rounded-md flex flex-col border border-blue-500 z-[1] ${openMenu && menuId === task.id ? 'scale-[1]' : 'scale-[0]'}`} onClick={() => setOpenMenu(false)}>
								<a className="text-center w-full pt-1 rounded-t-md text-gray-300 h-[2rem] hover:bg-[rgba(255,255,255,0.1)]" onClick={() => handleOpenDetail(task.id)}>Edit</a>
								<a className="text-center w-full pt-1 rounded-b-md h-[2rem] text-gray-300 hover:bg-[rgba(255,255,255,0.1)]" onClick={() => handleTaskDelete(task.id)}>Delete</a>
							</div>
						</div>
					</div>
				)) }
			</div>
		</div>
	)
}

export default TaskList