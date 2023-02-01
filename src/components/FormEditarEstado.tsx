import { updateStateRecord } from "@/api/data"
import { DetailContext } from "@/context/DetailContext"
import { EditStateRecordSchema } from "@/schemas/edit_state_record_schema"
import { useAuthStore } from "@/store/auth"
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { Formik } from "formik"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const FormEditarEstado = ({handleClose}:any) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const logout = useAuthStore(state => state.logOut)
  // @ts-ignore
  const { detalleRegistro } = useContext(DetailContext)

  if (detalleRegistro.id_estado == 'No Coincide'){
    detalleRegistro.id_estado = 2
  }
  else if (detalleRegistro.id_estado == 'Error'){
    detalleRegistro.id_estado = 3
  }
  else if (detalleRegistro.id_estado == 'Revisado'){
    detalleRegistro.id_estado = 4
  }
  else if (detalleRegistro.id_estado == 'Cerrado'){
    detalleRegistro.id_estado = 6
  }

  return (
    <Formik
      initialValues={{
        id_registro: detalleRegistro.id_registro,
        id_estado: detalleRegistro.id_estado
      }}
      validationSchema={EditStateRecordSchema}
      onSubmit={async values => {
        values.id_estado = Number(values.id_estado)
        setIsLoading(true)
        const updateResponse = await updateStateRecord(values)
        if (updateResponse.status != 401) {
          alert(updateResponse)
          window.location.reload()
        }
        else {
          alert('Sesión expirada. Vuelva a iniciar sesión')
          logout()
          navigate('/login')
        }
        setIsLoading(false)


      }}>
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} item xs={"auto"} className='grid'>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <FormLabel id="row-radio-buttons-group-label">Nuevo estado:</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="id_estado"
                  value={values.id_estado}
                  onChange={handleChange}
                >
                  <FormControlLabel disabled={detalleRegistro.id_estado == 2 ? false : true} value={4} control={<Radio />} label="Revisado" />
                  <FormControlLabel disabled={detalleRegistro.id_estado == 2 ? false : true} value={3} control={<Radio />} label="Error" />
                  <FormControlLabel disabled={detalleRegistro.id_estado == 4 || detalleRegistro.id_estado == 3 ? false : true} value={6} control={<Radio />} label="Cerrado" />

                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12} className="button-group">
              <Grid item md={12} className="list-right">
                {isLoading ? <CircularProgress /> : <><Button onClick={handleClose} variant="outlined">
                  Cancelar
                </Button>
                  <Button disabled={detalleRegistro.id_estado == 6 ? true : false} type="submit" variant="contained" disableElevation>
                    Guardar
                  </Button></>}
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}

    </Formik>
  )
}