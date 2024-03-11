import { useState } from 'react';
import CategoryList from '../components/CategoryList'
import useFetch from '../hooks/useFetch'

const CategoryPage = () => {
  const { data: categoryData, loading, error, } = useFetch('/categories/')

  const handleCategoryCreation = (e) => {
    console.log(e.target.value)
  }

  return (
		<div className='mx-3'>
			<div className='text-left my-5'>
				<h1 className="capitalize text-gray-900 font-semibold sm:text-3xl text-2xl"> Task categories </h1>
			</div>

			<div className="w-[100%] md:w-[60%] h-14 flex text-base outline-none bg-white text-gray-500">
        		<div className='w-[80%]'>
        			<input type="text" className='h-full w-full px-5 border border-gray-300 rounded-l-xl outline-none focus:border focus:border-blue-500' placeholder="Create category..." />
        		</div>
        		<div className='w-[20%] flex items-center justify-center px-3 bg-gradient-to-r from-purpleP to-purple-400 text-gray-900 rounded-r-xl cursor-pointer hover:opacity-90'>
        			<button className='font-medium text-sm text-center' onClick={handleCategoryCreation}>Add</button>
        		</div>
      		</div>
      		<div className='category-con'>
            <CategoryList categoryData={categoryData} loading={loading} className="category-box" />
      		</div>
		</div>
	)
};

export default CategoryPage;
