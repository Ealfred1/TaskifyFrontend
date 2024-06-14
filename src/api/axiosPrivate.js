import axios from 'axios'

const LOCAL_URL = 'http://localhost:8000/api'
const ACTIVE_URL = 'https://taskify-fl.onrender.com/api'

const axiosPrivate = axios.create({
  baseURL: ACTIVE_URL,
  headers: { 'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authTokens') && JSON.parse(localStorage.getItem('authTokens')).access || null}`
   },
  withCredentials: true
})

// Add interceptor to include Authorization header for authenticated requests
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authTokens');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token).access}`
      // console.log('authrosi', config.headers.Authorization)
      // console.log('authrosi', config.headers)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
})

export default axiosPrivate
