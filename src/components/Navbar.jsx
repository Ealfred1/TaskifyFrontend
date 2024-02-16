import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Image from '../assets/bg1.jpg'

const Navbar = ({ handleSideBarToggle, closed }) => {
  
  return (
    <nav className="navbar">
      <div className="logo-items">
        <FontAwesomeIcon icon={ closed ? faClose : faBars } className="" onClick={handleSideBarToggle} />
        <h2 className="text-2xl">Taskify</h2>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="navbar-content">
        <i className='bx bx-sun i' id="darkLight"></i>
        <i className='bx bx-bell i'></i>
        <img src={Image} alt="logo_img" className="w-[40px] h-[40px] rounded-full" />
      </div>
      
    </nav>
  )
}

export default Navbar