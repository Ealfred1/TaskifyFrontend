import { useState, useEffect } from 'react'

const TaskList = ({ data, loading, className, getTasks }) => {

	useEffect(()=> {
		console.log('TaskList', data)
	}, [loading])
	return (
		<div className="w-full">
			<div className="space-y-2">
				{ data.length > 0 && data.map((task) => (
					<div className="flex items-center px-2 rounded-xl task-list relative h-20 border border-gray-500 border-b-8 border-b-purpleP" key={task.id}>
						<div className="space-x-3">
							<input type="checkbox" checked={task.completed} />
							<label className="task-label">{ task.title }</label>
						</div>
					</div>
				)) }
			</div>
		</div>
	)
}

export default TaskList