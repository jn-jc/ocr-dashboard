import { useEffect, useState } from "react"
import { getRecords } from "@/api/data"
import { useAuthStore } from "@/store/auth"
import { useNavigate } from "react-router-dom"
import MUIDataTables from "mui-datatables"
import { defColumns } from "@/utils/constantsTable"



export function TableClientes() {
  
  const navigate = useNavigate()

  const logout = useAuthStore(state => state.logOut)

  const [registros, setRegistros] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const get_api_data = async () => {
      const responseRecords = await getRecords()
      if (responseRecords.status != 401){
        console.log(responseRecords)
        setRegistros(responseRecords)
        setIsLoading(false)
      }
      else{
        alert('Sesión expirada. Vuelva a iniciar sesión')
        logout()
        navigate('/login')
      }
    }
    get_api_data()
    
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2 style={{ fontFamily: 'sans-serif' }}>Cargando registros...</h2>
      </div>
    )
  }

  return (
    <>
      <MUIDataTables
        title={''}
        data={registros}
        columns={defColumns}
        options={{filterType: 'checkbox'}}
      />
    </>
  )
}
