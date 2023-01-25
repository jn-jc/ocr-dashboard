import { updateRecord } from "@/api/data"
import { DetailContext } from "@/context/DetailContext"
import { EditRecordSchema } from "@/schemas/edit_record_schema"
import { useAuthStore } from "@/store/auth"
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Formik } from "formik"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export const FormEditarRegistro = () => {
  const navigate = useNavigate()

  const logout = useAuthStore(state => state.logOut)
  const { detalleRegistro } = useContext(DetailContext)
  return (
    <Formik
      initialValues={{
        id_registro: detalleRegistro.id_registro,
        tipo_doc: '',
        programa: '',
        num_documento: ''
      }}
      validationSchema={EditRecordSchema}
      onSubmit={async values => {
        values.num_documento = values.num_documento.toString()
        const responseUpdate = await updateRecord(values)
        if (responseUpdate.status != 401) {
          console.log(responseUpdate)
          alert(responseUpdate.data)
          window.location.reload()
        }
        else {
          alert('Sesión expirada. Vuelva a iniciar sesión')
          logout()
          navigate('/login')
        }
      }} >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} item xs={12} className="grid">
            <Grid container spacing={2} item xs={12}>
              <Grid item xs={4}>
                <TextField disabled id="id" name="id_registro" label="ID" variant="outlined" defaultValue={detalleRegistro.id_registro} />
              </Grid>
            </Grid>
            <Grid container spacing={2} item xs={12}>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="plan-cliente-label">Plan *</InputLabel>
                  <Select
                    labelId="plan-cliente-label"
                    id="programa"
                    name="programa"
                    value={values.programa}
                    onChange={handleChange}
                    label="Plan"
                  >
                    <MenuItem value={'CDC'}>Derma</MenuItem>
                    <MenuItem value={'CCV'}>Club Cruz Verde</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="tipo-documento-label">Tipo documento *</InputLabel>
                  <Select
                    labelId="tipo-documento-label"
                    id="tipo_doc"
                    name="tipo_doc"
                    label="Tipo documento"
                    value={values.tipo_doc}
                    onChange={handleChange}
                  >
                    <MenuItem value={'CC'}>Cédula</MenuItem>
                    <MenuItem value={'PS'}>Pasaporte</MenuItem>
                    <MenuItem value={'CE'}>Cédula Extranjería</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField id="num_documento" name="num_documento" label="No. documento *" type={"number"} variant="outlined" value={values.num_documento} onChange={handleChange} />
              </Grid>
            </Grid>
            <Grid item md={12} className="button-group">
              <Grid item md={12} className="list-right">
                <Button variant="outlined">
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" disableElevation>
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </form>
      )}

    </Formik>
  )
}