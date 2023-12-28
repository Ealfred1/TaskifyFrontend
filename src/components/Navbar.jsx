import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ handleSideBarToggle }) => {
  
  return (
    <nav className="navbar">
      <div className="logo-items">
        <FontAwesomeIcon icon={faBars} className="" onClick={handleSideBarToggle} />
        <h2 className="text-2xl">Taskify</h2>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="navbar-content">
        <i className='bx bx-sun i' id="darkLight"></i>
        <i className='bx bx-bell i'></i>
      </div>
      
    </nav>
  )
}

export default Navbar