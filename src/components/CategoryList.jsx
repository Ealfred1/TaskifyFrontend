import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CategoryPopup from './CategoryPopup'
import CategoryEdit from './CategoryEdit'
import useTasks from '../hooks/useTasks'

const CategoryList = ({ categoryData, loading, className, menuClass }) => {
	const navigate = useNavigate()
	const [openMenu, setOpenMenu] = useState(false)
	const [menuId, setMenuId] = useState(null)
	const [editId, setEditId] = useState(null)
	const [categoryMessage, setCategoryMessage] = useState('')
	const { toggle, handleToggle } = useTasks()
	const [editToggle, setEditToggle] = useState(false)

	const handleEditToggle = () => {
		setEditToggle(!editToggle)
	}

	const handleCategoryClick = (id) => {
		navigate(`/category/${id}`)
	}

	const handleMenuClick = (id) => {
		setOpenMenu(!openMenu)
		setMenuId(id)
	}

	const handleCategoryDelete = (id) => {
		setMenuId(id)
		let message = "You about to delete a task category, note that all the task in this category will be deleted as well!"
		setCategoryMessage(message)
		handleToggle()
	}

	const handleCategoryEdit = (id) => {
		setEditId(id)
		handleEditToggle()
	}
	return (
		<>
			{ loading && <div className="flex items-center justify-center text-9xl dark:text-gray-300 w-full h-full"><h1 className="text-gray-400 text-center"><i className="pi pi-spinner pi-spin"></i></h1></div> }
			<div className="">
					{ categoryMessage.length > 0 && menuId === menuId && (<CategoryPopup message={categoryMessage} categoryId={menuId} toggle={toggle} handleToggle={handleToggle} />) }

					{ editId === editId && (<CategoryEdit categoryId={editId} toggle={editToggle} handleToggle={handleEditToggle} />) }

				</div>
			{ categoryData.length > 0 && categoryData.map((data) => (
				<div className={`${className} bg-gradient-to-r from-purpleP to-purple-400 dark:to-purple-500 relative`} key={data.id}>
					<div className={`${menuClass} bg-red-500 relative `}>
						<button className="w-[2rem] h-[2rem] flex items-center justify-center rounded-full hover:bg-purpleP bg-opacity-100 top-0 absolute right-0 text-right text-white" onClick={() => handleMenuClick(data.id)}><span className="pi pi-ellipsis-v"></span></button>
						<div className={`w-[10rem] h-[5rem] py-2 duration-500 absolute top-8 right-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-2xl rounded-md flex flex-col ${openMenu && menuId === data.id ? 'scale-[1]' : 'scale-[0]'}`}>
							<a className="text-center w-full pt-1 rounded-t-md text-gray-300 h-[2rem] hover:bg-[rgba(255,255,255,0.1)]" onClick={() => handleCategoryEdit(data.id)}>Edit</a>
							<a className="text-center w-full pt-1 rounded-b-md h-[2rem] text-gray-300 hover:bg-[rgba(255,255,255,0.1)]" onClick={() => handleCategoryDelete(data.id)}>Delete</a>
						</div>
					</div>
					<div className="flex items-center justify-center h-full" onClick={() => handleCategoryClick(data.id)}>
						<h1 className='text-center text-lg sm:text-xl font-semibold text-gray-100 dark:text-gray-300'>{data.name}</h1>
					</div>
					<div className="text-right text-white" onClick={() => handleCategoryClick(data.id)}>
						<p className="text-lg"><i className="bx bx-task"></i>{data.task_count}</p>						
					</div>

				</div>
				)) }
			{ categoryData.length <= 0 && (<div className="text-xl text-gray-500">Oops, you don't have any categories yet!!</div>) }

		</>
	)
}

export default CategoryList