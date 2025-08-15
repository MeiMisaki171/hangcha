import axios from 'axios'

// Create Axios instance with defaults
const api = axios.create({
  baseURL: 'https://api.example.com', // replace with your API base URL
  timeout: 10000, // optional, request timeout in ms
  headers: {
    'Content-Type': 'application/json'
  }
})

// OPTIONAL: Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Example: attach token if exists
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// OPTIONAL: Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized - maybe redirect to login')
    }
    return Promise.reject(error)
  }
)

export default api
