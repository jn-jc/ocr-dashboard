import axios from '@/lib/axios'

export const getRecords = async () => {

  const res = await axios.get('/registros/all-records')
    .then(response => response.data)
    .catch(error => error.response)

  return res
}