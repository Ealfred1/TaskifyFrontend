import axios from 'axios'

const axiosPrivate = axios.create({
  baseURL: 'http://localhost:8000/api'
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