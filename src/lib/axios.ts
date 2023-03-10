import axios from 'axios'
import { useAuthStore } from '@/store/auth'

const authApi = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true
})

authApi.interceptors.request.use(config => {
  const token = useAuthStore.getState().token
  // @ts-ignore
  config.headers = {
    Authorization: `Bearer ${token}`,
  }
  return config
})

export default authApi

