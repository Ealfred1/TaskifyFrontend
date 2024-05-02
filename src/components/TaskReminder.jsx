import { useState, useEffect } from 'react'

const TaskReminder = ({ tasks, musicUrl }) => {
	const [audio, setAudio] = useState(null)

	useEffect(() => {
		const audioElement = new Audio(musicUrl)
		setAudio(audioElement)

		return () => {
			if (audioElement) {
				audioElement.pause()
				audioElement.currentTime = 0;
			}
		}
	}, [musicUrl])

	useEffect(()=> {
		const checkDueTasks = () => {
			const now = new Date()
			const dueTasks = tasks.filter(task => new Date(task.due_date) <= now)

			if (dueTasks.length > 0) {
				if (audio) {
					audio.play()
				}
			}
		}

	const intervalId = setInterval(checkDueTasks, 60000);
	return () => clearInterval(intervalId)
	}, [tasks, audio])

	return null;
}

export default TaskReminder