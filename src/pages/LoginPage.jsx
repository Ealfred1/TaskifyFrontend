import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios'
import LoginImage from '../assets/login.png'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const LoginPage = () => {
  const { setAuth } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  const LOGIN_URL = '/login/'
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = async (e) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({ username, password }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )
        
        console.log(response?.data)
        toast.success("Login Successful !", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setAuth(response?.data)
        setUsername('')
        setPassword('')
      
      } catch (err) {
        if (!err?.response) {
          setErrorMsg('No Server Response')
          console.log(errorMsg)
          toast.error(errorMsg, {
            position: toast.POSITION.TOP_RIGHT,
         })
        } else if (err.response.status === 400) {
          setErrorMsg(err.response.data.error)
          console.log(errorMsg)
          toast.error(errorMsg, {
              position: toast.POSITION.TOP_RIGHT,
           })                  } else {
          setErrorMsg('Login Failed')
          console.log(errorMsg)
          toast.error(errorMsg, {
            position: toast.POSITION.TOP_RIGHT,
         })
        }
      }
    }
  
  
  return (
    <div className="flex flex-col justify-center items-center w-full relative h-screen bg-white">
          <ToastContainer />
    <img src={LoginImage} alt="Login image" className="w-full h-52 object-contain" />
    
      <h1 className="text-gradient text-3xl text-gray-800 mt-9 font-bold">Sign In</h1>
      <p className="text-sm mt-1.5 font-medium text-gray-400">Enter your credentials below</p>
        <form className=" px-2 max-w-2xl w-full" method="post" onSubmit={handleSubmit}>  
          <div className="input-con">
            <input type="text" onChange={handleUsernameChange} value={username} id="username" className="auth-field" required />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-con">
            <input type={showPassword ? 'text' : 'password'}  id="password" value={password} className="auth-field-pass" onChange={handlePasswordChange} required />
            <label htmlFor="password">Password</label>
            { password.length > 0 &&
              ( <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="pass-toggle" onClick={togglePasswordVisibility} /> )
            }
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