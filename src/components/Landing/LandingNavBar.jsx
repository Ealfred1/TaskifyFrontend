import { Link } from 'react-router-dom'

const LandingNavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-items">
        <h2 className="text-2xl"><Link to="/">Taskify</Link></h2>
      </div>
      
      <div className="navbar-content">
        <Link to="/register">Sign Up</Link>
      </div>
      
    </nav>
  )
}

export default LandingNavBar