import axios from 'axios'
import authService from './auth'

const apiEnvs = {
  local: 'http://localhost:3000',
  production: ''
}

const httpClient = axios.create({
  baseURL: apiEnvs.local
})

httpClient.interceptors.response.use(
  response => response,
  error => {
    const canThrows = error.request.status === 0 || error.request.status === 500
    if (canThrows) throw new Error(error.message)
    return error
  }
)
export default { auth: authService(httpClient) }
