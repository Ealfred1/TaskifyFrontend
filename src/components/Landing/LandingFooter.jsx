import { Link } from 'react-router-dom'

const LandingFooter = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="mt-28 w-full h-auto sm:px-12 px-4 py-7 bg-slate-900 text-white flex sm:justify-between flex-col sm:flex-row items-center space-y-8 justify-center relative bottom-0">
      <div className="sm:w-32 h-full w-full text-center space-y-3">
        <div className="logo-items flex items-center justify-center">
          <h2 className="text-2xl">Taskify</h2>
        </div>
          <p className="text-sm text-[#777]">&copy; Copyright <span id="year">{year}</span></p>
        </div>
        
        <div className=" sm:w-52 h-full w-full space-y-2 text-center flex flex-col
        text-lg">
          <h3 className="text-3xl">Quick Links</h3>
          <Link className="hover:opacity-90" to="/dashboard"> Home</Link>
          <Link className="hover:opacity-90" to="/login"> Sign In</Link>
          <Link className="hover:opacity-90" to="/register">Sign Up</Link>
        </div>
        
        <div className="text-center sm:w-52 h-full w-full flex flex-col space-y-3">
          
          <div className="flex items-center justify-center space-x-3">
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className='bx bxl-facebook'></i>
          </div>
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className='bx bxl-instagram'></i>
          </div>
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className='bx bxl-twitter'></i>
          </div>
          </div>
        </div>
      </footer>
  )
}

export default LandingFooter