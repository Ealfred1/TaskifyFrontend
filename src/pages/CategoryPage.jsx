import { useState, useEffect } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const CategoryPage = () => {
	const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const response = await axiosPrivate.get('/categories/');
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
		<div className='mx-3 dark:bg-black'>
			<div className='text-left my-5'>
				<h1 className="capitalize text-gray-900 font-semibold sm:text-3xl text-2xl"> Task categories </h1>
			</div>

			<div className="w-[100%] md:w-[60%] h-14 flex text-base outline-none bg-white text-gray-500">
        		<div className='w-[80%]'>
        			<input type="text" className='h-full w-full px-5 border border-gray-300 rounded-l-xl outline-none focus:border focus:border-blue-500' placeholder="Create category..." />
        		</div>
        		<div className='w-[20%] flex items-center justify-center px-3 bg-gradient-to-r from-purpleP to-purple-400 text-gray-900 rounded-r-xl cursor-pointer hover:opacity-90'>
        			<button className='font-medium text-sm text-center'>Add</button>
        		</div>
      		</div>
      		<div className='my-6 gap-y-12 flex flex-wrap w-[100%] justify-around md:justify-start md:gap-12'>
      			<div className='category-box'>
      				
      			</div>
      			<div className='category-box'>
      				
      			</div>
      			<div className='category-box'>
      				
      			</div>
      			<div className='category-box'>
      				
      			</div>

      			<div className='category-box'>
      				
      			</div>

      		</div>
		</div>
	)
};

export default CategoryPage;
