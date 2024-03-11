import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validateForm from '../utils/validateForm1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import RegisterImage from '../assets/register.png'
import axios from '../api/axios'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



const RegisterPage = () => {
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({})
  const [errorMsg, setErrorMsg] = useState('')
  const REGISTER_URL = '/register/'
  
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const newErrors = validateForm(formData)
    setError(newErrors)
    const isValid = Object.keys(newErrors).length === 0;
    
    if (isValid) {
      try {
        const response = await axios.post(REGISTER_URL, 
          JSON.stringify(formData),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )
        
        setLoading(false)
        console.log(response?.data)
        toast.success("Registration Successful ! Please Login", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setFormData({first_name: '',last_name: '',username: '',email: '',password: '',})
      
      setTimeout(() => {
          navigate('/login')
        }, 1000);
      } catch (err) {
        if (!err?.response) {
          setLoading(false)
          setErrorMsg('No Server Response')
          toast.error(errorMsg, {
            position: toast.POSITION.TOP_RIGHT,
         })
        } else if (err.response.status === 400) {
          setLoading(false)
          setErrorMsg('Username Taken')
          toast.error(errorMsg, {
              position: toast.POSITION.TOP_RIGHT,
           })          
           console.log(errorMsg)
        } else {
          setLoading(false)
          setErrorMsg('Registration Failed')
          toast.error(errorMsg, {
            position: toast.POSITION.TOP_RIGHT,
         })
        }
      }
    }
  }
  
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <ToastContainer />
      <img src={RegisterImage} alt="Register image" className="w-full h-52 md:h-64 object-contain" />
    
      <h1 className="text-3xl text-gray-800 font-bold text-gradient"> Get Started</h1>
        <form className="mt-4 px-2 max-w-2xl w-full" method="post" onSubmit={handleSubmit}>
          <div className="flex justify-around w-full -mb-4">
          
            <div className="input-con md:w-1/2">
              <input type="text" 
                     name="first_name"
                     id="first_name"
                     className="auth-field"
                     value={formData.first_name}
                     onChange={handleInputChange}
                     required />
              <label htmlFor="first_name">First Name</label>
            </div>
            {error.first_name && <span className="error-message">{error.first_name}</span>}
            
            <div className="input-con md:w-1/2">
              <input type="text" 
                     name="last_name"
                     id="last_name"
                     value={formData.last_name}
                     onChange={handleInputChange}
                     className="auth-field"
                     required />
              <label htmlFor="last_name">Last Name</label>
            </div>
            {error.last_name && <span className="error-message">{error.last_name}</span>}
          </div>
          
          <div className="input-con">
            <input type="text"
                   name="username"
                   id="username"
                   className="auth-field"
                   value={formData.username}
                   onChange={handleInputChange}
                   required />
            <label htmlFor="username">Create Username</label>
          </div>
          {error.username && <span className="error-message">{error.username}</span>}
          <div className="input-con">
            <input type="email"
                   name="email"
                   id="email"
                   className="auth-field"
                   value={formData.email}
                   onChange={handleInputChange}
                   required />
            <label htmlFor="email">Email Address</label>
          </div>
          {error.email && <span className="error-message">{error.email}</span>}
          <div className="input-con">
            <input type={showPassword ? "text" : "password"} 
                   name="password"
                   id="password"
                   className="auth-field-pass"
                   value={formData.password}
                   onChange={handleInputChange}
                   required />
                   
            <label htmlFor="password">Password</label>
            { formData?.password?.length > 0 &&
              ( <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="pass-toggle" onClick={togglePasswordVisibility} /> )
            }
          </div>
          {error.password && <span className="error-message">{error.password}</span>}
          
          <div className="px-2 text-center">
            <button type="submit" className="btn-auth">{ loading ? 'Signing Up...' : 'Sign Up' } </button>
            <h3 className="mt-2"> Already have an account? <Link to='/login' className="text-purpleP font-bold"> Sign In </Link></h3>
          </div>
          
         </form>
     </div>
  )
}

export default RegisterPage