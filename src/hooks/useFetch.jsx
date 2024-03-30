import { useState, useEffect } from 'react'
import axiosPrivate from '../api/axiosPrivate'

const useFetch = (url) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get(url);
      console.log('Fetched Data', response.data);
      // Assuming you have a state setter function for dashboardData
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.error);
        setError(err.response)
        // Assuming you have a function to handle the 401 error and retry the request
        // fetchdata();
      } else {
        console.log('Request Failed:', err.message)
        setError(err.message)
      }
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchdata();
  }, [loading])
  
  return { data, loading, error}
}

export default useFetch