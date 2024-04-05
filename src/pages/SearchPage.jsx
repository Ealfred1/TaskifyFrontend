import { useState, useEffect, useRef } from 'react';
import axiosPrivate from '../api/axiosPrivate';
import TaskList from '../components/TaskList'
import useTasks from '../hooks/useTasks';
import Image from '../assets/searching.png'

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

			<div className='w-full flex items-center justify-center px-3 mb-5'>
				<div className="h-12 max-w-[430px] w-full block md:hidden">
					<input type="text" className="h-full w-full rounded-full text-base outline-none focus:border-purpleP bg-transparent text-gray-500 border border-gray-300 px-5 dark:text-white" placeholder="Search Tasks..." value={searchTerm} onChange={handleSearchChange} ref={searchInputRef} />
				</div>
			</div>

			{ searchTerm.length < 1 && 
				<div className="flex items-center justify-center flex-col">
					<img src={Image} alt="search" />
					<h1 className="dark:text-white text-2xl">Looking for tasks?</h1>
				</div>
			}
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