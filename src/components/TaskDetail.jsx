import { useState, useEffect } from 'react'
import humanizeTime from '../utils/humanizeTime'
import axiosPrivate from '../api/axiosPrivate'
import validateTaskForm from '../utils/validateTaskForm'
import { ToastContainer, toast } from "react-toastify"
import useTasks from '../hooks/useTasks'
import useDashboard from '../hooks/useDashboard'

const TaskDetail = ({ open, setOpen, id }) => {
	const [formData, setFormData] = useState({
	    title: '',
	    description: '',
	    category: '',
	    due_date: '',
	    priority: '',
	    status: '',
	    reminder: '',
  	})
  	const { getTasks, categoryData } = useTasks()
  	const { fetchdata } = useDashboard()
  	const [error, setError] = useState({})
  	const URL = `/tasks/${id}`

  	const handleInputChange = (e) => {
    	const { name, value } = e.target
    	setFormData({...formData, [name]: value})
  	}

  	const handleStatusClick = (value) => {
    	setFormData({...formData, status: value})
  	}

  	const handlePriorityClick = (value) => {
    	setFormData({...formData, priority: value})
  	}

  	const handleCategoryClick = (value) => {
    	setFormData({...formData, category: value})
  	}


  	const handleSubmit = (e) => {
	    e.preventDefault()
	    const newErrors = validateTaskForm(formData)
	    setError(newErrors)
	    const isValid = Object.keys(newErrors).length === 0;
	    if (isValid) {
	      submitForm()
	    }
  	}

  	const submitForm = async () => {
  		try {
	      const response = await axiosPrivate.put(URL, 
	      	JSON.stringify(formData))
	      console.log('Task Updated', response.data)
	      toast.success("Task Updated ", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      setOpen(false)
	      getTasks()
	      fetchdata()
    	} catch (err) {
	         console.log(err)
	         toast.error("Failed! 🤕️", {
	          position: toast.POSITION.TOP_CENTER,
	        })
        }
     	finally {
	      setError({})
	      setFormData({
	      	title: '',
		    description: '',
		    category: '',
		    due_date: '',
		    priority: '',
		    status: '',
		    reminder: '',
	      })

	    }
  	}

  	useEffect(() => {
	  const getTaskDetail = async () => {
	    try {
	      const response = await axiosPrivate.get(URL);
	      console.log('detail Data', response.data.title);
	      // setData(response.data);
	      fetchdata()
	      setFormData(
			{
			    title: response.data.title,
			    description: response.data.description,
			    category: response.data.category,
			    due_date: response.data.due_date,
			    priority: response.data.priority,
			    status: response.data.status,
			    reminder: response.data.reminder,
		  	}
	      )

	    } catch (err) {
	      if (err.response && err.response.status === 401) {
	        console.log(err.response.data.error);
	        setError(err.response)
	      } else {
	        console.log('Request Failed:', err.message)
	        // setError(err.message)
	      }
	    } finally {
	      // setLoading(false);
	      console.log('datadatra', formData)
	    }
	  }
	  getTaskDetail()
  	}, [open])
	    

	return (
		<div className={`mt-16 w-[85%] md:w-[70%] lg:w-[40%] task-detail ${ open ? 'open' : '' } h-screen fixed top-0 z-[1] bottom-0 dark:bg-slate-900 border-l border-l-gray-500 overflow-scroll`}>
			<span className="pi pi-times-circle absolute top-8 right-4" onClick={() => setOpen(false)}></span>
			<form method="post" className="py-16 px-2" onSubmit={handleSubmit}>
					<div className="flex text-gray-800 items-center justify-center new relative py-2 mb-5">
						<h1 className="text-xl dark:text-gray-200">Task Detail</h1>
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Title</label>
						<input type="text" 
			              name="title" 
			              value={formData.title}
			              onChange={handleInputChange}
			              className="task-input"
			              placeholder="Fix code bugs"
			            />
			            { error.title && <span className="error-message">{error.title}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Description</label>
						<textarea 
			              name="description"
			              value={formData.description}
			              onChange={handleInputChange}
			              className="task-input resize-none py-2 px-3 h-20"
			              placeholder="Inspect page with error, try some fixes..."
			            ></textarea>
			            { error.description && <span className="error-message">{error.description}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Category</label>
						<div className="flex space-x-3 overflow-x-auto p-2 category-list-con">
							{ categoryData.length > 0 && categoryData.map((category) => (
								<span key={category.id} onClick={() => handleCategoryClick(category.name)} className={`category-button ${formData.category === category.name ? 'active' : ''}`}>{category.name}</span>
							)) }
							{ categoryData.length <= 0 && categoryData != {} && (<label className="task-label text-sm text-gray-400">No categories yet! Try creating some, if not we'll use a default category</label>) }
						</div>
						{ error.category && <span className="error-message">{error.category}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Due Date</label>
						<input type="date" 
			              name="due_date" 
			              value={formData.due_date}
			              onChange={handleInputChange}
			              className="task-input"
			            />
			            { error.due_date && <span className="error-message">{error.due_date}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Reminder</label>
						<input type="time" 
			              name="reminder" 
			              value={formData.reminder}
			              onChange={handleInputChange}
			              className="task-input"
			            />
					</div>


					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Priority</label>
						<div className="flex space-x-3">
							<a onClick={() => handlePriorityClick('low')} className={`task-button bg-red-300 ${formData.priority === 'low' ? 'active' : ''}`}>Low</a>
							<a onClick={() => handlePriorityClick('medium')} className={`task-button bg-yellow-300 ${formData.priority === 'medium' ? 'active' : ''}`}>Medium</a>
							<a onClick={() => handlePriorityClick('high')} className={`task-button bg-green-300 ${formData.priority === 'high' ? 'active' : ''}`}>High</a>
						</div>
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Status</label>
						<div className="flex space-x-3">
							<a onClick={() => handleStatusClick('todo')} className={`task-button bg-red-400 ${formData.status === 'todo' ? 'active' : ''}`}>To-Do</a>
							<a onClick={() => handleStatusClick('in_progress')} className={`task-button bg-yellow-400 ${formData.status === 'in_progress' ? 'active' : ''}`}>In-Progress</a>
						</div>
					</div>
			        <button type="submit" className="btn2 w-full">Update Task</button>
		      	</form>
		</div>
	)
}

export default TaskDetail