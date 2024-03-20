import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Image from '../assets/bg1.jpg'
import DarkModeToggle from './DarkModeToggle'

const Navbar = ({ handleSideBarToggle, closed }) => {
  
  return (
    <nav className="navbar dark:bg-slate-900 dark:border dark:border-slate-900 dark:border-b-gray-500">
      <div className="logo-items">
        <FontAwesomeIcon icon={ closed ? faClose : faBars } className="" onClick={handleSideBarToggle} />
        <h2 className="text-2xl">Taskify</h2>
      </div>
      
      <div className="search-bar">
        <input type="text" className="dark:bg-transparent dark:border-gray-500" placeholder="Search..." />
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