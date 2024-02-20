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
        <Navbar handleSideBarToggle={handleSideBarToggle} closed={sideBarClose} />
        <SideBar sideBarClose={sideBarClose} />
        <div className="max-w-7xl h-screen mt-24 sm:ml-[90px]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout