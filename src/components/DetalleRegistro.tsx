import { getDetailRecord } from "@/api/data"
import { RegistroModel } from "@/models/registro_model"
import { useAuthStore } from "@/store/auth"
import { Grid, Typography, Card, CardContent, Button, Modal } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validateDocType } from "@/utils/validateDataTable"
import { ModalRegistro } from "./ModalRegistro"
import { DetailContext } from "@/context/DetailContext"
import { ModalGestion } from "./ModalGestion"



export const DetalleRegistro = ({ id }: any) => {

  const base64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE3My45OSAzNTEuOTgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzMuOTksMjM0LjM3YzAsMTguNjYtNi45NCwzMy44Ny0yMC44Myw0NS42NS0xMy44OSwxMS43OC0zMy4xLDE5LjIyLTU3LjY1LDIyLjN2NDkuNjVoLTE3LjA0di00OC44MWMtMTIuOTEtLjI4LTI2Ljk3LTEuODYtNDIuMTgtNC43My0xNS4yMi0yLjg3LTI3LjMyLTYuNDItMzYuMjktMTAuNjJ2LTIxLjY3YzEwLjUyLDUuMDUsMjMuMTEsOS4zMywzNy43NiwxMi44MywxNC42NSwzLjUxLDI4LjIzLDUuMjYsNDAuNzEsNS4yNnYtMTA2Ljg4Yy0yMC4zNC02LjE3LTM1LjQyLTEyLjM0LTQ1LjIzLTE4LjUxLTkuODItNi4xNy0xNi45Ny0xMy40Ny0yMS40Ni0yMS44OC00LjQ5LTguNDItNi43My0xOC42NS02LjczLTMwLjcyLDAtMTcuMzksNi42My0zMi4wMSwxOS44OC00My44NywxMy4yNi0xMS44NSwzMS4xLTE5LjE4LDUzLjU0LTIxLjk5VjBoMTcuMDRWMzkuOTdjMjcuNjMsMS4yNiw1Mi4yNSw2LjMxLDczLjg1LDE1LjE1bC02Ljk0LDE4Ljk0Yy0xOS43OC04LjY5LTQyLjA4LTEzLjc0LTY2LjktMTUuMTV2MTAyLjI1YzI5Ljg4LDkuMjYsNTAuNDIsMTkuMzYsNjEuNjQsMzAuMywxMS4yMiwxMC45NCwxNi44MywyNS4yNSwxNi44Myw0Mi45MlpNMjcuOTgsMTA2LjI1YzAsMTIuMDYsNCwyMS45NSwxMS45OSwyOS42Niw3Ljk5LDcuNzIsMjAuODMsMTQuMjQsMzguNSwxOS41N1Y2MC4xN2MtMTYuNjksMi4yNC0yOS4yOCw3LjU3LTM3Ljc2LDE1Ljk5LTguNDksOC40Mi0xMi43MywxOC40NS0xMi43MywzMC4wOVptMTIyLjg3LDEyNy4yOWMwLTExLjkyLTQuNDItMjEuNzgtMTMuMjUtMjkuNTYtOC44NC03Ljc4LTIyLjg2LTE0LjQ4LTQyLjA4LTIwLjA5djk5LjA5YzE3LjExLTEuODIsMzAuNjEtNy4wOCw0MC41LTE1Ljc4LDkuODktOC43LDE0LjgzLTE5LjkxLDE0LjgzLTMzLjY2WiIvPjwvc3ZnPg=="

  const { setDetalleRegistro, detalleRegistro } = useContext(DetailContext)

  const navigate = useNavigate()
  const logout = useAuthStore(state => state.logOut)

  const [isLoading, setIsLoading] = useState(true)


  const get_details_record = async () => {
    const responseRecords = await getDetailRecord(id)
    if (responseRecords.status != 401) {
      setDetalleRegistro(responseRecords)
      setIsLoading(false)
    }
    else {
      alert('Sesión expirada. Vuelva a iniciar sesión')
      logout()
      navigate('/login')
    }
  }
  useEffect(() => {
    get_details_record()
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2 style={{ fontFamily: 'sans-serif' }}>Cargando registros...</h2>
      </div>
    )
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className='container-body'>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h1">
            Gestion Clientes
          </Typography>
          <Grid item xs={12}>
            <Card className='card-page'>
              <CardContent>
                <Typography className='title-card' variant="h3">
                  Detalle Registro
                </Typography>
                <Grid item xs={12} className="contenido-detalles">
                  <Grid item xs={2}>
                    <label>ID</label>
                    <span>{id}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>Fecha envío</label>
                    <span>{detalleRegistro?.fecha_registro.split('T')[0]}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>Fecha inscripción</label>
                    <span>{detalleRegistro?.fecha_inscripcion}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>Plan</label>
                    <span>{detalleRegistro?.id_plan}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>Tipo documento</label>
                    <span>{detalleRegistro?.id_tipo_doc != undefined ? validateDocType(detalleRegistro?.id_tipo_doc) : ''}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>No. documento</label>
                    <span>{detalleRegistro?.no_doc_cliente}</span>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="contenido-detalles">
                  <Grid item xs={4}>
                    <label>Nombres</label>
                    <span>{detalleRegistro?.nombre_cliente != undefined ? `${detalleRegistro?.nombre_cliente} ${detalleRegistro?.apellido_cliente}` : ''}</span>
                  </Grid>
                  <Grid item xs={4}>
                    <label>Correo electrónico </label>
                    <span>{detalleRegistro?.email_cliente}</span>
                  </Grid>

                  <Grid item xs={2}>
                    <label>Firma</label>
                    <span>{detalleRegistro?.id_estado != 'Coincide' ? 'No' : 'Sí'}</span>
                  </Grid>

                </Grid>

                <Grid item xs={12} className="contenid
                o-detalles">
                  <Grid item xs={2}>
                    <label>Tienda</label>
                    <span>{detalleRegistro?.image_data.id_usuario}</span>
                  </Grid>

                  <Grid item xs={2}>
                    <label>Estado</label>
                    <span>{detalleRegistro?.id_estado}</span>
                  </Grid>
                  <Grid item xs={4}>
                    <label>Documento asociado </label>
                    <span>{detalleRegistro?.image_data.nombre_archivo}</span>
                  </Grid>

                </Grid>

                <Grid item md={12} className="button-group">
                  <Grid item md={12} className="list-right">
                    <Button variant="outlined" component={Link} to="/gestion-clientes">
                      Volver
                    </Button>
                    {detalleRegistro?.id_estado != 'Coincide' ? <><ModalGestion />
                      <ModalRegistro /> </> : undefined}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}