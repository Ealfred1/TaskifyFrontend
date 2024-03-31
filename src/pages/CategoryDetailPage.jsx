import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axiosPrivate from '../api/axiosPrivate'
import useFetch from '../hooks/useFetch'
import useTasks from '../hooks/useTasks'
import CreateTask from '../components/CreateTask'
import TaskList from '../components/TaskList'

const CategoryDetailPage = () => {
	const { id } = useParams()
	const [searchParams] = useSearchParams()
	const URL = `/categories/${id}`
	// const { data, loading, error } = useFetch(URL)
	const [toggle, setToggle] = useState(false)
	const { categoryData, categoryLoading } = useTasks()
	const category = categoryLoading === false && categoryData.find((category) => category.id === parseInt(id));

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getTasks = async () => {
    try {
      const response = await axiosPrivate.get(URL);
      console.log('Fetched Data', response.data);
      // Assuming you have a state setter function for dashboardData
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.error);
        setError(err.response)
        // Assuming you have a function to handle the 401 error and retry the request
        // getTasks();
      } else {
        console.log('Request Failed:', err.message)
        setError(err.message)
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    	setToggle(!toggle)
 	}
  
  useEffect(() => {
    getTasks();
  }, [loading])

	


 	useEffect(() => {
 		// console.log('detail page', category.name)
  	}, [])

 	
  
	
	return (
		<div className="w-full flex px-2 py-9">
			<div className="w-full py-4 dark:bg-[rgba(255,255,255,0.1)] border border-gray-200 dark:border-none rounded-xl px-3">
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

         		         		<div className="w-full">
		           <div className="text-gray-600 relative py-2 mb-5 w-full">
		              <h1 className="text-xl dark:text-gray-200 line font-bold">ToDo</h1>
		           </div>
		           <TaskList data={loading === false && data?.tasks && data.tasks.length > 0 && data.tasks.filter((task) => task.status === 'todo')} loading={loading} getTasks={getTasks} />
		         </div>

		         <div className="w-full">
		           <div className="text-gray-600 relative py-2 mb-5 w-full">
		              <h1 className="text-xl dark:text-gray-200 line font-bold">In Progress</h1>
		           </div>
		           <TaskList data={loading === false && data?.tasks && data.tasks.length > 0 && data.tasks.filter((task) => task.status === 'in_progress')} loading={loading} getTasks={getTasks} />
		         </div>

		         <div className="w-full">
		           <div className="text-gray-600 relative py-2 mb-5 w-full">
		              <h1 className="text-xl dark:text-gray-200 line font-bold">Completed</h1>
		           </div>
		           <TaskList data={loading === false && data?.tasks && data.tasks.length > 0 && data.tasks.filter((task) => task.status === 'completed')} loading={loading} getTasks={getTasks} />
		         </div>

         		<div className="">
           			<CreateTask toggle={toggle} handleToggle={handleToggle} categoryDetail={category.name} />
         		</div> 		
			</div>
		</div>
	)
}

export default CategoryDetailPage