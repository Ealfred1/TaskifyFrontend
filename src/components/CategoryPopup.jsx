import { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"
import useTasks from '../hooks/useTasks'

const CategoryPopup = ({ message, categoryId, toggle, handleToggle }) => {
	const { getCategories } = useTasks()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
	      const response = await axiosPrivate.delete(`/categories/${categoryId}`)
	      console.log('deleted cat', response.data)
	      toast.success("Success!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	      handleToggle()
	      getCategories()
	      // fetchdata()
	    } catch (err) {
	         console.log('deleted', err)
	         toast.error("Failed!", {
	          position: toast.POSITION.TOP_CENTER,
	        })
	        }
	     finally {
	     	console.log('done')	
	     }
	}
	
	return (
		<>
			<div className={`absolute inset-0 z-[1] flex items-center justify-center menu ${toggle ? 'toggle' : '' }`}>
				<form method="post" onSubmit={handleSubmit} className={`w-[95%] md:w-[60%] h-56 lg:w-[40%] bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-none dark:outline dark:outline-[1px] dark:outline-gray-500 h-[70%] flex flex-col fixed z-[1] rounded-lg shadow-2xl menu ${toggle ? 'toggle' : '' }`}>
				<div className="w-full rounded-t-lg h-14 mb-4 font-bold bg-red-500 flex items-center justify-center text-white">
					Delete Category
				</div>
				<label className="task-label text-sm md:text-lg text-gray-400 px-2">{ message }</label>

				<div className="flex justify-between absolute bottom-0 px-2 w-full gap-4 mt-4 bg-slate-50 dark:bg-slate-900 rounded-lg py-2">
			          <a onClick={handleToggle} className="bg-none border border-gray-500 btn2 text-gray-500">Go back</a>
			          <button type="submit" className="text-center w-1/2 h-14 text-lg rounded-lg text-white bg-red-500 hover:scale-[1.033]">Delete</button>
			    </div>
				</form>
			</div>
		</>
	)
}

export default CategoryPopup