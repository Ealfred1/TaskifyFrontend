import { Outlet, Link } from 'react-router-dom'
import LandingNavBar from './LandingNavBar.jsx'
import LandingFooter from './LandingFooter.jsx'

const LandingLayout = () => {
  return (
    <>
      <div>
        <LandingNavBar />
        <div className="max-w-4xl mx-auto mt-24">
          <Outlet />
        </div>
        <LandingFooter />
      </div>
    </>
  )
}

export default LandingLayout