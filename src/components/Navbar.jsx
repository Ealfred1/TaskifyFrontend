import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Image from '../assets/profile.jpeg'
import DarkModeToggle from './DarkModeToggle'
import { useLocation } from 'react-router-dom'

const Navbar = ({ handleSideBarToggle, closed }) => {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (pathname === '/search') {
      setDisplay('hidden')
    } else {
      setDisplay('')
    }
  }, [pathname])
  
  return (
    <nav className="navbar bg-transparent backdrop-blur-2xl dark:bg-slate-900 dark:border dark:border-slate-900 dark:border-b-gray-500">
      <div className="logo-items">
        <FontAwesomeIcon icon={ closed ? faClose : faBars } className="" onClick={handleSideBarToggle} />
        <h2 className="text-2xl">Taskify</h2>
      </div>
      
      <div className={`search-bar ${display}`}>
        <input type="text" className="dark:bg-transparent dark:border-gray-500 dark:text-white" placeholder="Search..." />
      </div>
      
      <div className="navbar-content">
        <DarkModeToggle />
        <i className='bx bx-bell i'></i>
        <img src={Image} alt="logo_img" className="w-[40px] h-[40px] rounded-full" />
      </div>
      
    </nav>
  )
}

export default Navbar