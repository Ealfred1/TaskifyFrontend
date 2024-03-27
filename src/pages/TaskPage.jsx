import { useState, useEffect } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const TaskPage = () => {
	const [taskData, setTaskData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/tasks/');
      console.log('Task', response.data)
      setTaskData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.error);
        setError(err.response.data)
        // Assuming you have a function to handle the 401 error and retry the request
        // fetchdata();
      } else {
        console.log('Request Failed:', err.message);
        setError('Request Failed')
      }
    } finally {
      setLoading(false);
    }
 


 };

  useEffect(() => {
    fetchdata()
  }, [loading])

	return (
		<div className="w-full h-screen flex justify-center p-2">
			 <div className="w-full h-auto dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(80,80,80,0.1)] rounded-xl p-3">
         <div className="flex justify-between w-full mb-4 h-12">
           <div className="py-2">
             <h1 className="text-lg md:text-xl text-gradient font-semibold">Task List</h1>
           </div>
           <div className="">
             <button className="border rounded-lg w-40 h-11 border-gray-400 dark:text-gray-300 hover:bg-blue-main transition-colors duration-500 hover:text-white hover:border-none"><i className="bx bx-plus"></i> Create Task</button>
           </div>
         </div>

         <div className=""></div>
       </div>
		</div>
	)
}

export default TaskPage