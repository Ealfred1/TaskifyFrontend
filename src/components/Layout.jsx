import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import SideBar from './SideBar.jsx'
 
// import Footer from './Footer.jsx'

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <SideBar />
        <div className="max-w-4xl mx-auto mt-24">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout