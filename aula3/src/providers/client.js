import axios from 'axios'
import { getToken } from '../helpers/auth'


const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'https://senac-shopping-list-api.herokuapp.com/v1/'
  }

  let instance = axios.create(defaultOptions)
  instance.interceptors.request.use(async config => {
    const token = await getToken()
    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config
  })

  return instance
}

export default fetchClient()
