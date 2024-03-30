import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useTasks from '../hooks/useTasks'
import CreateTask from '../components/CreateTask'

const CategoryDetailPage = () => {
	const { id } = useParams()
	const [searchParams] = useSearchParams()
	const URL = `/categories/${id}`
	const { data, loading, error } = useFetch(URL)
	const [toggle, setToggle] = useState(false)
	const { categoryData } = useTasks()
	const category = categoryData.find((category) => category.id === parseInt(id));

	const handleToggle = () => {
    	setToggle(!toggle)
 	}

 	useEffect(() => {
 		// console.log('detail page', category.name)
  	}, [])

 	
  
	
	return (
		<div className="w-full h-screen flex justify-center px-2 py-9">
			<div className="w-full h-auto dark:bg-[rgba(255,255,255,0.1)] border border-gray-200 dark:border-none rounded-xl p-3">
				<div className="w-full h-16 flex items-center justify-center">
					<h1 className="text-center text-4xl text-purpleP flex items-center justify-center rounded-3xl transform -translate-y-9 font-bold w-96 h-16 bg-slate-50 dark:bg-slate-900 duration-500">{data.name}</h1>
				</div>

				<div className="flex justify-between w-full mb-4 h-12">
		           <div className="py-2 flex justify-between items-center gap-2">
		            	<h1 className="text-lg md:text-xl text-gradient font-semibold">Task List </h1>
		            	<div className="w-[24px] h-[24px] flex items-center justify-center rounded-full border border-gray-500 text-blue-main">{data.task_count}</div>
		           </div>
		           <div className="">
		            	<button className="border rounded-lg w-40 h-11 border-gray-400 dark:text-gray-300 hover:bg-blue-main transition-colors duration-500 hover:text-white hover:border-none" title="Create A Task Under This Category" onClick={handleToggle}><i className="bx bx-plus"></i> Create Task</button>
		           </div>
         		</div>

         		<div className="">
           			<CreateTask toggle={toggle} handleToggle={handleToggle} categoryDetail={category.name} />
         		</div> 		
			</div>
		</div>
	)
}

export default CategoryDetailPage