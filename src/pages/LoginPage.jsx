import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative h-screen">
      <h1 className="text-gradient text-3xl text-gray-800 mt-9 font-bold">Sign In</h1>
      <p className="text-sm mt-1.5 font-medium text-gray-400">Enter your credentials below</p>
        <form className=" px-2 max-w-2xl w-full">
          <div className="input-con">
            <input type="text" name="username" id="username" className="auth-field" required />
            <label htmlFor="username">Username</label>
          </div>
          
          <div className="input-con">
            <input type="password" name="password" id="password" className="auth-field-pass" required />
            <label htmlFor="password">Password</label>
          </div>
          
          <div className="px-2 text-center">
            <button type="submit" className="btn-auth"> Sign In</button>
            <h3 className="mt-2"> Don't have an account? <Link to="/register" className="text-purpleP font-bold"> Sign Up </Link></h3>
          </div>
          
         </form>
     </div>
  )
}

export default LoginPage