import { DetailContext } from "@/context/DetailContext"
import { EditStateRecordSchema } from "@/schemas/edit_state_record_schema"
import { useAuthStore } from "@/store/auth"
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { Formik } from "formik"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const FormEditarEstado = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const logout = useAuthStore(state => state.logOut)
  const { detalleRegistro } = useContext(DetailContext)

  return (
    <Formik
      initialValues={{
        id_registro: detalleRegistro.id_registro,
        id_estado: ''
      }}
      validationSchema={EditStateRecordSchema}
      onSubmit={async values => {
        setIsLoading(true)
        console.log(values)
        setTimeout(() => {
          console.log(values)
          setIsLoading(false)
        }, 3000)


      }}>
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} item xs={"auto"} className='grid'>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <FormLabel id="row-radio-buttons-group-label">Nuevo estado:</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="id_estado"
                  value={values.id_estado}
                  onChange={handleChange}
                >
                  <FormControlLabel value={4} control={<Radio />} label="Revisado" />
                  <FormControlLabel value={3} control={<Radio />} label="Error" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12} className="button-group">
              <Grid item md={12} className="list-right">
                {isLoading ? <CircularProgress /> : <><Button variant="outlined">
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