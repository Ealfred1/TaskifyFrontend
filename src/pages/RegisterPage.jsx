import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl text-gray-800 font-bold text-gradient"> Get Started</h1>
        <form className="mt-4 px-2 max-w-2xl w-full">
          <div className="flex justify-around w-full -mb-6">
          
            <div className="input-con md:w-1/2">
              <input type="text" name="first_name" id="first_name" className="auth-field" required />
              <label htmlFor="first_name">First Name</label>
            </div>
            
            <div className="input-con md:w-1/2">
              <input type="text" name="last_name" id="last_name" className="auth-field" required />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          
          <div className="input-con">
            <input type="text" name="username" id="username" className="auth-field" required />
            <label htmlFor="username">Create Username</label>
          </div>
          
          <div className="input-con">
            <input type="email" name="email" id="email" className="auth-field" required />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-con">
            <input type="password" name="password" id="password" className="auth-field-pass" required />
            <label htmlFor="password">Password</label>
            <FontAwesomeIcon icon={faEye} className="pass-toggle" />
          </div>
          <div className="input-con">
            <input type="password" name="password1" id="password1" className="auth-field-pass" required /> 
            <label htmlFor="password1">Confirm Password</label>
          </div>
          
          <div className="px-2 text-center">
            <button type="submit" className="btn-auth"> Sign Up</button>
            <h3 className="mt-2"> Already have an account? <Link to='/login' className="text-purpleP font-bold"> Sign In </Link></h3>
          </div>
          
         </form>
     </div>
  )
}

export default RegisterPage