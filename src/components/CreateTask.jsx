import { useState, useEffect } from 'react'
import validateTaskForm from '../utils/validateTaskForm'
import { ToastContainer, toast } from "react-toastify"
import useTasks from '../hooks/useTasks'
import useDashboard from '../hooks/useDashboard'
import axiosPrivate from '../api/axiosPrivate'

const CreateTask = ({ toggle, handleToggle, categoryDetail }) => {
	const [formData, setFormData] = useState({
	    title: '',
	    description: '',
	    category: '',
	    due_date: '',
	    priority: '',
	    status: '',
  	})
  	const [error, setError] = useState({})
  	const { getTasks, categoryData } = useTasks()
  	const { fetchdata } = useDashboard()

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
	      const response = await axiosPrivate.post('/tasks/', 
	      	JSON.stringify(formData))
	      console.log('task submitted', response.data)
	      toast.success("New Task Added 🥳️! ", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      handleToggle()
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
	      })

	    }
  	}

  	useEffect(() => {
    	handleCategoryClick(categoryDetail)
  	}, [])


	return (
		<>
			<div className={`absolute inset-0 flex items-center justify-center menu ${toggle ? 'toggle' : '' }`}>
				<form method="post" onSubmit={handleSubmit} className={`w-[95%] md:w-[60%] lg:w-[40%] bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-none dark:outline dark:outline-[1px] dark:outline-gray-500 h-[70%] flex flex-col fixed z-[1] rounded-lg shadow-2xl menu ${toggle ? 'toggle' : '' }`}>
					<div className="overflow-auto pb-20 task-create-con mt-1 px-2">
					<div className="flex text-gray-800 items-center justify-center new relative py-2 mb-5">
						<h1 className="text-xl dark:text-gray-200">New Task</h1>
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
			              placeholder="Fix code bugs"
			            />
			            { error.due_date && <span className="error-message">{error.due_date}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Priority</label>
						<div className="flex space-x-3">
							<a onClick={() => handlePriorityClick('low')} className={`task-button bg-red-300 ${formData.priority === 'low' ? 'active' : ''}`}>Low</a>
							<a onClick={() => handlePriorityClick('medium')} className={`task-button bg-yellow-300 ${formData.priority === 'medium' ? 'active' : ''}`}>Medium</a>
							<a onClick={() => handlePriorityClick('high')} className={`task-button bg-green-300 ${formData.priority === 'high' ? 'active' : ''}`}>High</a>
						</div>
						{ error.priority && <span className="error-message">{error.priority}</span> }
					</div>

					<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1">
						<label className="task-label">Status</label>
						<div className="flex space-x-3">
							<a onClick={() => handleStatusClick('todo')} className={`task-button bg-red-400 ${formData.status === 'todo' ? 'active' : ''}`}>To-Do</a>
							<a onClick={() => handleStatusClick('in_progress')} className={`task-button bg-yellow-400 ${formData.status === 'in_progress' ? 'active' : ''}`}>In-Progress</a>
						</div>
						{ error.status && <span className="error-message">{error.status}</span> }
					</div>

					</div>
					<div className="flex justify-between px-2 w-full gap-4 mt-4 bg-slate-50 dark:bg-slate-900  rounded-lg fixed bottom-0 py-2">
			          <a onClick={handleToggle} className="bg-none border border-gray-500 btn2 text-gray-500">Cancel</a>
			          <button type="submit" className="btn2">Create</button>
			        </div>
			        
		      	</form>
			</div>
		</>
	)
}

export default CreateTask