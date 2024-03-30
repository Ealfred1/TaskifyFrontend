import { createContext, useState, useEffect } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const TaskContext = createContext({})

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toggle, setToggle] = useState(false)

   const getTasks = async () => {
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

 const handleToggle = () => {
    setToggle(!toggle)
 }

  useEffect(() => {
    getTasks()
  }, [loading])
  
  return (
      <TaskContext.Provider value={{ taskData, error, getTasks, loading, handleToggle, toggle }}>
        {children}
      </TaskContext.Provider>
    )
}

export default TaskContext