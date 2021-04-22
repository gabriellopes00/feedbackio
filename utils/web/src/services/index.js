import axios from 'axios'
import authService from './auth'
import { router } from '../router/index'
import usersService from './users'
import { setGlobalLoading } from '../store/global'

const apiEnvs = {
  local: 'http://localhost:3000',
  production: ''
}

const httpClient = axios.create({
  baseURL: apiEnvs.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = localStorage.getItem('token')
  if (token) config.headers.common.Authorization = `Bearer ${token}`
  return config
})

httpClient.interceptors.response.use(
  response => response,
  error => {
    const canThrows = error.request.status === 0 || error.request.status === 500
    if (canThrows) {
      setGlobalLoading(false)
      throw new Error(error.message)
    }
    if (error.response.status === 401) router.push({ name: 'Home' })
    setGlobalLoading(false)
    return error
  }
)
export default {
  auth: authService(httpClient),
  users: usersService(httpClient)
}
