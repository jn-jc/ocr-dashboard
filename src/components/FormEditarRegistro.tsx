import { updateRecord } from "@/api/data"
import { DetailContext } from "@/context/DetailContext"
import { EditRecordSchema } from "@/schemas/edit_record_schema"
import { useAuthStore } from "@/store/auth"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Formik } from "formik"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingButton } from "./LoadingButton"


export const FormEditarRegistro = () => {
  const navigate = useNavigate()

  const logout = useAuthStore(state => state.logOut)
  // @ts-ignore
  const { detalleRegistro } = useContext(DetailContext)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Formik
      initialValues={{
        id_registro: detalleRegistro.id_registro,
        tipo_doc: '',
        programa: '',
        num_documento: '',
        image_path: detalleRegistro.image_data.path_archivo
      }}
      validationSchema={EditRecordSchema}
      onSubmit={async values => {
        setIsLoading(true)
        values.num_documento = values.num_documento.toString()
        const responseUpdate = await updateRecord(values)
        if (responseUpdate.status != 401) {
          alert(responseUpdate.data)
          window.location.reload()
          setIsLoading(false)
        }
        else {
          alert('Sesión expirada. Vuelva a iniciar sesión')
          logout()
          navigate('/login')
          setIsLoading(false)
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
                <LoadingButton isLoading={isLoading} labelButton={'Guardar'}/>
              </Grid>
            </Grid>
          </Grid>

        </form>
      )}

    </Formik>
  )
}