import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSun } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SideBar = ({ sideBarClose }) => {
  
  const { setAuth } = useAuth()
  
  const logout = () => {
    setAuth({})
    localStorage.removeItem('authTokens')
    toast.info("You've been logged out", {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  
  return (
    <nav className={sideBarClose ? 'sidebar ' : 'sidebar close'}>
      <div className="menu_content">
        <ul className="menu_items space-y-6">
          <div className="menu_title menu_dashboard"></div> 
          <li className="item">
            <Link to="/dashboard" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-home-alt"></i>
              </span>
              <span className="navlink">Dashboard</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/task" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-task"></i>
              </span>
              <span className="navlink">Task Overview</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/category" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-grid-alt"></i>
              </span>
              <span className="navlink">Manage Categories</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/search" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-search"></i>
              </span>
              <span className="navlink">Search</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/tasks/filter" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-filter"></i>
              </span>
              <span className="navlink">Filter Task</span>
            </Link>
          </li>
        </ul>
        
        <div className="bottom_content">
          <div className="bottom collapse_sidebar text-center">
          <button onClick={logout}>
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