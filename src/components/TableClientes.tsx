import { useEffect, useState } from "react"
import { getRecords } from "@/api/data"
import { useAuthStore } from "@/store/auth"
import { useNavigate } from "react-router-dom"


export function TableClientes() {
  
  const navigate = useNavigate()

  const logout = useAuthStore(state => state.logOut)

  const [resgistros, setRegistros] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const get_api_data = async () => {
      const responseRecords = await getRecords()
      if (responseRecords.status != 401){
        const json = JSON.stringify(responseRecords)
        setRegistros(json)
        setIsLoading(false)
        console.log(resgistros)
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
    <div>{resgistros}</div>

  )
}
