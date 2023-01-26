import { getRecords } from "@/api/data"
import { columns, muiTableTheme, options } from "@/lib/muiDatatable"
import { useAuthStore } from "@/store/auth"
import MUIDataTable from "mui-datatables"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"

export const TableClientes = () => {

  const get_api_data = async () => {
    const responseRecords = await getRecords()
    if (responseRecords.status != 401) {
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
    <ThemeProvider theme={muiTableTheme()}>
      <MUIDataTable
        title=''
        data={registros}
        columns={columns}
        options={options}

      />
    </ThemeProvider>
  )
}