import { getRecords } from "@/api/data"
import { columns } from "@/lib/dataGrid"
import { RegistroModel } from "@/models/registro_model"
import { useAuthStore } from "@/store/auth"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../assets/css/DataGrid.css'


export const DataGridRegistros = () => {

  const get_api_data = async () => {
    const responseRecords = await getRecords()
    if (responseRecords.status != 401) {
      console.log(responseRecords)
      setRegistros(responseRecords)
      setIsLoading(false)
    }
    else {
      alert('Sesión expirada. Vuelva a iniciar sesión')
      logout()
      navigate('/login')
    }
  }

  const navigate = useNavigate()

  const logout = useAuthStore(state => state.logOut)

  const [registros, setRegistros] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
    <DataGrid
      columns={columns}
      rows={registros}
      getRowId={(row)=> row.id_registro}
      disableSelectionOnClick
      components={{
        ColumnResizeIcon(props) {
          return null
        },
      }}
    />
  )

}