import { useState, useEffect } from 'react';
import axiosPrivate from '../api/axiosPrivate';
import useFetch from '../hooks/useFetch'
import useTasks from '../hooks/useTasks'
import CreateTask from '../components/CreateTask'
import TaskList from '../components/TaskList'

const TaskPage = () => {
  const { getTasks, handleToggle, toggle, taskData, loading } = useTasks()


	return (
		<div className="w-full flex px-2 py-9">
			 <div className="w-full py-4 dark:bg-[rgba(255,255,255,0.1)] border border-gray-200 dark:border-none rounded-xl px-3">
         <div className="flex justify-between w-full mb-4 h-12">
           <div className="py-2 flex gap-2">
             <h1 className="text-lg md:text-xl text-gradient font-semibold">Task List</h1>
             <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-gray-500 text-blue-main">{taskData.length}</div>
           </div>
           <div className="">
             <button className="border rounded-lg w-40 h-11 border-gray-400 text-gray-500 dark:text-gray-300 hover:bg-blue-main transition-colors duration-500 hover:text-white hover:border-none" onClick={handleToggle}><i className="bx bx-plus"></i> Create Task</button>
           </div>
         </div>

         <div className="w-full">
           <div className="text-gray-600 relative py-2 mb-5 w-full">
              <h1 className="text-xl dark:text-gray-200 line font-bold">ToDo</h1>
           </div>
           <TaskList data={taskData.length > 0 && taskData.filter((data) => data.status === 'todo')} loading={loading} getTasks={getTasks} />
         </div>

         <div className="w-full">
           <div className="text-gray-600 relative py-2 mb-5 w-full">
              <h1 className="text-xl dark:text-gray-200 line font-bold">In Progress</h1>
           </div>
           <TaskList data={taskData.length > 0 && taskData.filter((data) => data.status === 'in_progress')} loading={loading} getTasks={getTasks} />
         </div>

         <div className="w-full">
           <div className="text-gray-600 relative py-2 mb-5 w-full">
              <h1 className="text-xl dark:text-gray-200 line font-bold">Completed</h1>
           </div>
           <TaskList data={taskData.length > 0 && taskData.filter((data) => data.status === 'completed')} loading={loading} getTasks={getTasks} />
         </div>

         <div className="">
           <CreateTask toggle={toggle} handleToggle={handleToggle} />
         </div>
       </div>
		</div>
	)
}

export default TaskPage