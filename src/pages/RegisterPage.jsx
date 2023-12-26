import { useState } from 'react'
import { Link } from 'react-router-dom'
import validateForm from '../utils/validateForm1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


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
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm(formData)
    setError(newErrors)
    const isValid = Object.keys(newErrors).length === 0;
    if (isValid) {
      alert('Registration Successful')
      console.log(formData.password)
      setFormData({})
      setError({})
    }
  }
  
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl text-gray-800 font-bold text-gradient"> Get Started</h1>
        <form className="mt-4 px-2 max-w-2xl w-full" method="post" onSubmit={handleSubmit}>
          <div className="flex justify-around w-full -mb-6">
          
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
            <input type={showPassword ? 'text' : 'password'} 
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
            <button type="submit" className="btn-auth"> Sign Up</button>
            <h3 className="mt-2"> Already have an account? <Link to='/login' className="text-purpleP font-bold"> Sign In </Link></h3>
          </div>
          
         </form>
     </div>
  )
}

export default RegisterPage