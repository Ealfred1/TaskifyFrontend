import axios from 'axios'

LOCAL_URL = 'http://localhost:8000/api'
ACTIVE_URL = 'https://taskify-fl.onrender.com/api'

export default axios.create({
  baseURL: ACTIVE_URL
})