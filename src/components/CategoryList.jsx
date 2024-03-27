
const CategoryList = ({ categoryData, loading, className }) => {
	return (
		<>
			{ loading && <div>Getting categories... {/*Loading container to be added here...*/}</div> }
			{ categoryData.length > 0 && categoryData.map((data) => (
				<div className={`${className} bg-gradient-to-r from-purpleP to-purple-400 dark:to-purple-500`} key={data.id}>
					<div className="flex items-center justify-center h-full">
						<h1 className='text-center text-lg sm:text-xl font-semibold text-gray-100 dark:text-gray-300'>{data.name}</h1>
					</div>
				</div>
				)) }
			{ loading === 'false' && categoryData.length < 0 && (<div>Oops, you don't have any categories yet!!</div>) }

		</>
	)
}

export default CategoryList