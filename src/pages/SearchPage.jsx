import { useState, useEffect, useRef } from 'react';
import axiosPrivate from '../api/axiosPrivate';
import TaskList from '../components/TaskList'
import useTasks from '../hooks/useTasks';

const SearchPage = () => {
	const { taskData, loading, getTasks } = useTasks()
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	  }

	  useEffect(() => {
		searchInputRef.current.focus()
	  }, [])

	return (
		<>
			<div className='w-full'>
				<div className="search-bar fixed top-4 right-[21.4rem] z-[1000] -translate-x-32 translate-y-[1px]">
					<input type="text" className="dark:bg-slate-900 dark:border-gray-500 dark:text-white" placeholder="Search Tasks..." value={searchTerm} onChange={handleSearchChange} ref={searchInputRef} />
				</div>
			</div>
			<div className="">
				<TaskList data={taskData.length > 0 && taskData.filter((item) =>
    					item.title.toLowerCase().includes(searchTerm.toLowerCase()))}
   						loading={loading} 
						getTasks={getTasks} />
			</div>
		</>
	)
}

export default SearchPage