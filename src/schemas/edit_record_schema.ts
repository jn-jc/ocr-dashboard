import * as Yup from 'yup'

const EditRecordSchema = Yup.object().shape({
  tipo_doc: Yup.string().required(),
  num_documento: Yup.number().required()
})

export { EditRecordSchema }