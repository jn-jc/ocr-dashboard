import { LoginModel } from "@/models/login_model"
import axios from "@/lib/axios"

export const loginRequest = async (data: LoginModel) => {

  let formData = new FormData()

  formData.append('username', data.username)
  formData.append('password', data.password)


  const res = await axios.post('/create-token', formData)
    .then(response => response)
    .catch(error => {
      if (error.response) {
        return error.response
      }
      else {
        alert(`Type Error: ${error.message}. \nContacte al area de soporte.` )
        return error.message
      }
    })

  return res
}

export const profileRequest = async () => {
  return axios.get('/usuario/me')
}