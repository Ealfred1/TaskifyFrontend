import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBell, faSun } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  
  return (
    <nav className="sidebar">
      <div className="menu_content">
        <ul className="menu_items">
          <div className="menu_title menu_dashboard"></div>
          <li className="item">
            <Link to="/dashboard" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className="navlink">Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar