import * as Yup from 'yup'

export const EditStateRecordSchema = Yup.object().shape({
  id_registro: Yup.number().required(),
  id_estado: Yup.number().required(),
})

export const EditSignatureSchema = Yup.object().shape({
  id_registro: Yup.number().required(),
  firma: Yup.number().required(),
})
