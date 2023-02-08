import axios from '@/lib/axios'
import { UpdateSignature } from '@/models/registro_model'
import { UpdateRecordModel } from '@/models/updateRecord_model'
import { UpdateStateModel } from '@/models/updateState_model'

export const getRecords = async () => {

  const res = await axios.get('/registros/all-records')
    .then(response => response.data)
    .catch(error => error.response)

  return res
}

export const getDetailRecord = async (id_registro: number) => {
  const res = await axios.get(`/registros/${id_registro}`)
    .then(response => response.data)
    .catch(error => error.response)

  return res
}

export const updateRecord = async (data: UpdateRecordModel) => {
  const res = await axios.put(`/registros/update-record/${data.id_registro}`, data)
    .then(response => response)
    .catch(error => error)

  return res
}

export const updateStateRecord = async (data: UpdateStateModel) => {

  const res = await axios.put('/registros/edit-estado', data)
    .then(response => response.data)
    .catch(error => error.response)

  return res

}

export const getImageBase64 = async (path: string) => {
  const res = await axios.get('/imagen/get-image', {
    params: {
      path_image: path
    }
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
      return false
    })
  return res
}

export const updateSignature = async (data: UpdateSignature) => {

  const res = await axios.put('/registros/edit-firma', data)
    .then(response => response.data)
    .catch(error => error.response)

  return res

}