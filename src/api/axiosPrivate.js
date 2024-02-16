import axios from 'axios'

LOCAL_URL = 'http://localhost:8000/api'
ACTIVE_URL = 'https://taskify-fl.onrender.com/api'

const axiosPrivate = axios.create({
  baseURL: ACTIVE_URL
})

// Add interceptor to include Authorization header for authenticated requests
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authTokens');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token).access}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
})

export default axiosPrivate