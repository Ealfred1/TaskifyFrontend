import axios from 'axios'

const LOCAL_URL = 'http://localhost:8000/api'
const ACTIVE_URL = 'https://taskify-fl.onrender.com/api'

export default axios.create({
  baseURL: ACTIVE_URL
})
