import { useState, useEffect } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const TaskPage = () => {
		const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/user/profile');
      console.log('Task', response.data);
      // Assuming you have a state setter function for dashboardData
      setCategoryData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.error);
        // Assuming you have a function to handle the 401 error and retry the request
        // fetchdata();
      } else {
        console.log('Request Failed:', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [loading]);
	return (
		<div>
			Task Page!!!
		</div>
	)
}

export default TaskPage