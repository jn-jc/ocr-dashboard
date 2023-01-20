import { LoginModel } from "@/models/login_model"
import { loginRequest, profileRequest } from "@/api/auth"

export const validateLogin = async (data: LoginModel) => {


  const loginResponse = await loginRequest(data)
  if (loginResponse.status == 401) {
    alert('Accesso denegado')
  }
  else if (loginResponse.status == 200) {
    const resProfile = await profileRequest()
    return [loginResponse.data, resProfile.data]
  }
}