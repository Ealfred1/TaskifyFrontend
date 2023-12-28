import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import SideBar from './SideBar.jsx'
 
// import Footer from './Footer.jsx'

const Layout = () => {
  const [sideBarClose, setSideBarClose] = useState(false)
  
  const handleSideBarToggle = () => {
    setSideBarClose(!sideBarClose)
  }
  return (
    <>
      <div>
        <Navbar handleSideBarToggle={handleSideBarToggle} />
        <SideBar sideBarClose={sideBarClose} />
        <div className="max-w-4xl mx-auto mt-24 ml-[90px]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout