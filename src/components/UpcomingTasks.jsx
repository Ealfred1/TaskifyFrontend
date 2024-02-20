
const UpcomingTasks = ({ data }) => {
	const getUpcomingTasks = () => {
		const today = new Date()

		return (
			<div>
				{data?.recent_tasks && data?.recent_tasks.length > 0 ? (
					data.recent_tasks.filter((task) => new Date(task.due_date) >= today)
					.map((task) => (
						<div key={task.id}>
							<h1 className="text-xl sm:text-2xl text-gray-800 font-bold">Upcoming tasks</h1>
							<h1 className="text-xl sm:text-2xl text-gray-800 font-bold">{task.title}</h1>
						</div>
					))
				) : (
					<p className="text-xl sm:text-2xl text-gray-800 font-bold">No upcoming tasks</p>
				)}
			</div>
		)
	}
	return getUpcomingTasks()
}

export default UpcomingTasks