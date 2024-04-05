import { useState, useEffect, useRef } from 'react';
import axiosPrivate from '../api/axiosPrivate';
import TaskList from '../components/TaskList'
import useTasks from '../hooks/useTasks';

const SearchPage = () => {
	const { taskData, loading, getTasks } = useTasks()
	const [searchTerm, setSearchTerm] = useState('')
	const searchInputRef = useRef(null)

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	  }

	  useEffect(() => {
		searchInputRef.current.focus()
	  }, [])

	return (
		<>
			<div className='w-full flex items-center justify-center'>
				<div className="search-bar fixed top-3 md:-translate-x-10 z-[1000] translate-y-[1px]">
					<input type="text" className="dark:bg-slate-900 dark:border-gray-500 dark:text-white" placeholder="Search Tasks..." value={searchTerm} onChange={handleSearchChange} ref={searchInputRef} />
				</div>
			</div>
			<div className="px-2">
				<TaskList data={taskData.length > 0 && searchTerm.length > 0 && taskData.filter((item) =>
    					item.title.toLowerCase().includes(searchTerm.toLowerCase()))}
   						loading={loading} 
						getTasks={getTasks} />
			</div>
		</>
	)
}

export default SearchPage