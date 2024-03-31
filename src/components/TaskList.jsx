import { useState, useEffect } from 'react'

const TaskList = ({ data, loading, className, getTasks }) => {

	useEffect(()=> {
		getTasks()
	}, [loading])
	return (
		<div className="w-full">
			<div className="space-y-2">
				{ data.length > 0 && data.map((task) => (
					<div className="flex items-center px-2 rounded-xl task-list relative h-20" key={task.id}>
						<div className="space-x-3">
							<input type="checkbox" className="accent-white" checked={task.completed} />
							<label className="task-label-2">{ task.title }</label>
							<p className="text-xs">{ task.date_created }</p>
						</div>
					</div>
				)) }
			</div>
		</div>
	)
}

export default TaskList