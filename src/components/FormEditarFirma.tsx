import { updateSignature } from "@/api/data"
import { DetailContext } from "@/context/DetailContext"
import { EditSignatureSchema } from "@/schemas/edit_state_record_schema"
import { useAuthStore } from "@/store/auth"
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { Formik } from "formik"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

export const FormEditarFirma = ({ handleClose }: any) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const logout = useAuthStore(state => state.logOut)
  // @ts-ignore
  const { detalleRegistro } = useContext(DetailContext)

  return (
    <Formik
      initialValues={{
        id_registro: detalleRegistro.id_registro,
        firma: detalleRegistro.firma
      }}
      validationSchema={EditSignatureSchema}
      onSubmit={async values => {
        setIsLoading(true)
        const updateResponse = await updateSignature(values)
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
                  name="firma"
                  value={values.firma}
                  onChange={handleChange}
                >
                  <FormControlLabel disabled={detalleRegistro.firma == 0 ? false : true} value={1} control={<Radio />} label="Sí" />
                  <FormControlLabel disabled={detalleRegistro.firma == 1 ? false : true} value={0} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12} className="button-group">
              <Grid item md={12} className="list-right">
                {isLoading ? <CircularProgress /> : <><Button onClick={handleClose} variant="outlined">
                  Cancelar
                </Button>
                  <Button type="submit" variant="contained" disableElevation>
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