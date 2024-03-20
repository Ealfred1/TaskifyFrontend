import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSun } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SideBar = ({ sideBarClose }) => {
  
  const { setAuth, logout } = useAuth()


  
  return (
    <nav className={sideBarClose ? 'sidebar dark:bg-slate-900' : 'sidebar close dark:bg-slate-900'}>
      <div className="menu_content pt-10">
        <ul className="menu_items space-y-6">
          <div className="menu_title menu_dashboard font-semibold"></div> 
          <li className="item">
            <Link to="/dashboard" className="nav_link" title='Dashboard'>
              <span className="navlink_icon">
                <i className="bx bx-home-alt"></i>
              </span>
              <span className="navlink">Dashboard</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/task" className="nav_link" title='Task Overview'>
              <span className="navlink_icon">
                <i className="bx bx-task"></i>
              </span>
              <span className="navlink">Task Overview</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/category" className="nav_link" title='Categories'>
              <span className="navlink_icon">
                <i className="bx bx-grid-alt"></i>
              </span>
              <span className="navlink">Categories</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/search" className="nav_link" title='Search'>
              <span className="navlink_icon">
                <i className="bx bx-search"></i>
              </span>
              <span className="navlink">Search</span>
            </Link>
          </li>

          <li className="item">
            <Link to="/projects" className="nav_link" title='Projects'>
              <span className="navlink_icon">
                <i className="bx bxl-codepen"></i>
              </span>
              <span className="navlink">Projects</span>
            </Link>
          </li>


          <li className="item">
            <Link to="/calendar" className="nav_link" title='Calendar'>
              <span className="navlink_icon">
                <i className="bx bx-calendar"></i>
              </span>
              <span className="navlink">Calendar</span>
            </Link>
          </li>

          
          <li className="item">
            <Link to="/tasks/filter" className="nav_link" title='Filter Task'>
              <span className="navlink_icon">
                <i className="bx bx-filter"></i>
              </span>
              <span className="navlink">Filter Task</span>
            </Link>
          </li>

          <li className="item">
            <Link to="/settings" className="nav_link" title='Settings'>
              <span className="navlink_icon">
                <i className="bx bx-cog"></i>
              </span>
              <span className="navlink">Settings</span>
            </Link>
          </li>
        </ul>

        <div className="bottom_content">  
          <div className="bottom collapse_sidebar text-center dark:bg-slate-900">
          <button onClick={logout} title='Logout'>
            <span>Logout </span>
            <i className='bx bx-log-out'></i>
          </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar