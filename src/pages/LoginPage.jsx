import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import LoginImage from '../assets/login.png'


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [userErr, setUserErr] = useState('')
  const [pwdErr, setPwdErr] = useState('')
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = async (e) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    !username && username.trim() === '' ? setUserErr('Username is required') : setUserErr('')
    
    !password && password.trim() === '' ? setPwdErr('Username is required') : setPwdErr('')
    
    username && password ? console.log(username, password) : ''
  }
  
  return (
    <div className="flex flex-col justify-center items-center w-full relative h-screen bg-white">
    
    <img src={LoginImage} alt="Login image" className="w-full h-52 object-contain" />
    
      <h1 className="text-gradient text-3xl text-gray-800 mt-9 font-bold">Sign In</h1>
      <p className="text-sm mt-1.5 font-medium text-gray-400">Enter your credentials below</p>
        <form className=" px-2 max-w-2xl w-full" method="post" onSubmit={handleSubmit}>  
          <div className="input-con">
            <input type="text" onChange={handleUsernameChange} value={username} id="username" className="auth-field" required />
            <label htmlFor="username">Username</label>
          </div>
          {userErr && <span className="error-message">{userErr}</span>}
          <div className="input-con">
            <input type={showPassword ? 'text' : 'password'}  id="password" value={password} className="auth-field-pass" onChange={handlePasswordChange} required />
            <label htmlFor="password">Password</label>
            { password.length > 0 &&
              ( <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="pass-toggle" onClick={togglePasswordVisibility} /> )
            }
          </div>
          {pwdErr && <span className="error-message">{pwdErr}</span>}
          <div className="px-2 text-center">
            <button type="submit" className="btn-auth"> Sign In</button>
            <h3 className="mt-2"> Don't have an account? <Link to="/register" className="text-purpleP font-bold"> Sign Up </Link></h3>
          </div>
          
         </form>
     </div>
  )
}

export default LoginPage