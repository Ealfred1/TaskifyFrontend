import { useContext } from 'react'
import TaskContext from '../context/TaskProvider'

const useTasks = () => {
  return useContext(TaskContext)
}

export default useTasks