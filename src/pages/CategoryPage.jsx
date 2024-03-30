import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import CategoryList from '../components/CategoryList'
import useFetch from '../hooks/useFetch'
import useTasks from '../hooks/useTasks'
import axiosPrivate from '../api/axiosPrivate'
import { ToastContainer, toast } from "react-toastify"

const CategoryPage = () => {
  // const { data, loading, error, } = useFetch('/categories/')
  const { categoryData, categoryLoading:loading, setCategoryLoading:setLoading, getCategories:fetchdata, categoryError:error } = useTasks()
  const [newCategory, setNewCategory] = useState('')


  const handleInputChange = (e) => {
    setNewCategory(e.target.value)
  }

  const handleCategoryCreation = async (e) => {
  	e.preventDefault()
  	try {
      const response = await axiosPrivate.post('/categories/', 
      	JSON.stringify({ "name": newCategory }))
      console.log('CategoryData', response.data)
      toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
        })
      
      fetchdata()
    } catch (err) {
         console.log(err)
         toast.error("Failed!", {
          position: toast.POSITION.TOP_CENTER,
        })
        }
     finally {
      setNewCategory('')
      setLoading(false)
    }

  }

  useEffect(() =>{
  	fetchdata()
  }, [loading])

  return (
		<div className='mx-3'>
			<div className='text-left my-5'>
				<h1 className="capitalize dark:text-white font-semibold sm:text-3xl text-2xl"> Task categories </h1>
			</div>

			<form method="post" onSubmit={handleCategoryCreation}>
			<div className="w-[100%] md:w-[92%] lg:w-[60%] h-14 flex text-base outline-none text-gray-500">
        		<div className='w-[80%]'>
        			<input type="text" onChange={handleInputChange} value={newCategory} className='h-full w-full px-5 border border-gray-300 dark:border-gray-500 rounded-l-xl outline-none focus:border focus:border-blue-500 dark:bg-transparent dark:text-gray-300' placeholder="Create category..." />
        		</div>
        		<div className='w-[20%] flex items-center justify-center px-3 bg-gradient-to-r from-purpleP to-purple-400 dark:to-purple-500 text-gray-900 rounded-r-xl cursor-pointer hover:opacity-90 dark:hover:opacity-70'>
        			<button type="submit" className='font-medium text-sm text-center dark:text-gray-300'>Add</button>
        		</div>
      		</div>
      		</form>
      		<div className='category-con'>
            <CategoryList categoryData={categoryData} loading={loading} className="category-box dark:shadow-black" />
      		</div>
		</div>
	)
};

export default CategoryPage;
