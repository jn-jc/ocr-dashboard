import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  username: Yup.string().email('Email incorrecto').required('El correo electronico es requerido'),
  password: Yup.string().required('La contraseña es requerida')
})

export { LoginSchema }