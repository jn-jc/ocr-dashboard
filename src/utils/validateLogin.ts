import { LoginModel } from "@/models/login_model"
import { loginRequest, profileRequest } from "@/api/auth"
import { UpdateRecordModel } from "@/models/updateRecord_model"
import { updateRecord } from "@/api/data"

export const validateLogin = async (data: LoginModel) => {

  const loginResponse = await loginRequest(data)
  if (loginResponse.status == 401) {
    alert('Accesso denegado')
  }
  else if (loginResponse.status == 200) {
    return loginResponse.data
  }

}

export const getProfile = async () => {
  const profileResponse = await profileRequest()
  return profileResponse
}

