import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSun } from '@fortawesome/free-solid-svg-icons'

const SideBar = ({ sideBarClose }) => {
  
  return (
    <nav className={sideBarClose ? 'sidebar ' : 'sidebar close'}>
      <div className="menu_content">
        <ul className="menu_items space-y-6">
          <div className="menu_title menu_dashboard"></div> 
          <li className="item">
            <Link to="/dashboard" className="nav_link">
              <span className="navlink_icon">
                <i class="bx bx-home-alt"></i>
              </span>
              <span className="navlink">Dashboard</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/task" className="nav_link">
              <span className="navlink_icon">
                <i class="bx bx-task"></i>
              </span>
              <span className="navlink">Task Overview</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/category" className="nav_link">
              <span className="navlink_icon">
                <i class="bx bx-grid-alt"></i>
              </span>
              <span className="navlink">Manage Categories</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/search" className="nav_link">
              <span className="navlink_icon">
                <i class="bx bx-search"></i>
              </span>
              <span className="navlink">Search</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/tasks/filter" className="nav_link">
              <span className="navlink_icon">
                <i class="bx bx-filter"></i>
              </span>
              <span className="navlink">Filter Task</span>
            </Link>
          </li>
        </ul>
        
        <div class="bottom_content">
       {/*   <div class="bottom expand_sidebar">
            <span> Expand</span>
            <i class='bx bx-log-in' ></i>
          </div> */}
          <div class="bottom collapse_sidebar">
          <Link to='/logout'>
            <span>Logout</span>
            <i class='bx bx-log-out'></i>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar