import { getDetailRecord } from "@/api/data"
import { DetailContext } from "@/context/DetailContext"
import { useAuthStore } from "@/store/auth"
import { validateDocType } from "@/utils/validateDataTable"
import { Button, Card, CardContent, Grid, Typography, Link } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { Link as LinkRouter, useNavigate } from "react-router-dom"
import { ModalGestion } from "./ModalGestion"
import { ModalRegistro } from "./ModalRegistro"
import { image64 } from "@/utils/constimage"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



export const DetalleRegistro = ({ id }: any) => {


  const { setDetalleRegistro, detalleRegistro } = useContext(DetailContext)

  const navigate = useNavigate()
  const logout = useAuthStore(state => state.logOut)

  const [isLoading, setIsLoading] = useState(true)

  const handleImageClick = (img64: string) => {
    const win = window.open()
    win?.document.write(`<img style="height:100vh" src=${img64} />`)
  }


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

                <Grid item xs={12} className="contenido-detalles">
                  <Grid item xs={2}>
                    <label>Tienda</label>
                    <span>{detalleRegistro?.image_data.id_usuario}</span>
                  </Grid>

                  <Grid item xs={2}>
                    <label>Estado</label>
                    <span>{detalleRegistro?.id_estado}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <label>Documento asociado </label>
                    <Link style={{cursor:'pointer', fontFamily: 'Open Sans',padding: '8px 16px',marginLeft:'15px' , fontSize:'14px'}} underline="always" onClick={() => handleImageClick(image64)}>
                      {detalleRegistro?.image_data.nombre_archivo} <OpenInNewIcon fontSize='inherit'/>
                    </Link>
                  </Grid>
                </Grid>

                <Grid item md={12} className="button-group">
                  <Grid item md={12} className="list-right">
                    <Button variant="outlined" component={LinkRouter} to="/gestion-clientes">
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