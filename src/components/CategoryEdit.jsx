import { useState, useEffect } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"
import useFetch from '../hooks/useFetch'
import useTasks from '../hooks/useTasks'

const CategoryEdit = ({ categoryId, toggle, handleToggle }) => {
	const { getCategories, categoryData } = useTasks()
	const [newCategoryName, setNewCategoryName] = useState('')
	const [error, setError] = useState('')
	const URL = `/categories/${categoryId}`

	const handleInputChange = (e) => {
		setNewCategoryName(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (newCategoryName.length <= 1) {
			setError('Please complete the category name ')
			return false;
		}
		try {
	      const response = await axiosPrivate.put(URL, 
      		JSON.stringify({ "name": newCategoryName }))
	      toast.success("Success!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      handleToggle()
	      getCategories()
	      // fetchdata()
	    } catch (err) {
	         toast.error("Failed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	        }
	     finally {
	     	setError('')
	     	setNewCategoryName('')
	     }
	}

	
	return (
		<>
			<div className={`absolute inset-0 z-[1] flex items-center justify-center menu ${toggle ? 'toggle' : '' }`}>
				<form method="post" onSubmit={handleSubmit} className={`w-[95%] md:w-[60%] h-52 md:h-64 lg:w-[40%] bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-none dark:outline dark:outline-[1px] dark:outline-gray-500 h-[70%] flex flex-col fixed z-[1] rounded-lg shadow-2xl menu ${toggle ? 'toggle' : '' }`}>
				<div className="w-full rounded-t-lg h-14 mb-4 font-bold bg-purpleP flex items-center justify-center text-white">
					Edit Category
				</div>
				<div className="flex flex-col space-y-2 mb-2 text-gray-800 p-1 px-3">
						<label className="task-label">Change Category Name</label>
						<input type="text" 
			              value={newCategoryName}
			              onChange={handleInputChange}
			              className="task-input"
			              placeholder="Write a new name for your category  😄️"
			            />
			            { error && <span className="error-message">{error}</span> }
				</div>

				<div className="flex justify-between absolute bottom-0 px-2 w-full gap-4 mt-4 bg-slate-50 dark:bg-slate-900 rounded-lg py-2">
			          <a onClick={handleToggle} className="bg-none border border-gray-500 btn2 text-gray-500">Go back</a>
			          <button type="submit" className="text-center w-1/2 h-14 text-lg rounded-lg text-white bg-green-500 hover:scale-[1.033]">Update</button>
			    </div>
				</form>
			</div>
		</>
	)
}

export default CategoryEdit