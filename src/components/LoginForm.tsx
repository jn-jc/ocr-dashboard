import { LoginSchema } from '@/schemas/login_schema';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Formik } from 'formik';
import { useState } from 'react';
import { validateLogin, getProfile } from '@/utils/validateLogin';
import { useAuthStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';


function LoginForm() {

  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state => state.setProfile)

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={async values => {
          let res = await validateLogin(values)
          console.log(res)
          if (res != undefined){
            setToken(res.access_token)
            const resProfile = await getProfile()
            setProfile(resProfile.data)
            navigate('/')
          }
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} item xs={12} className="grid">
              <Grid item xs={12}>
                <TextField
                  id="username"
                  label="Correo Electronico"
                  variant="outlined"
                  type="email"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} className="password-input" variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={12} className="button-group">
              <Grid item md={12} className="list-right">
                <Button variant="contained" disableElevation type='submit'>
                  Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm