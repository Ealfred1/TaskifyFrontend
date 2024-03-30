import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkModeToggle'

const LandingNavBar = () => {
  return (
    <nav className="navbar bg-transparent backdrop-blur-2xl">
      <div className="logo-items">
        <h2 className="text-2xl"><Link to="/">Taskify</Link></h2>
      </div>
      
      <div className="navbar-content">
        <DarkModeToggle />
        <Link to="/register" className="text-lg text-gray-500">Sign up</Link>
      </div>
      
    </nav>
  )
}

export default LandingNavBar