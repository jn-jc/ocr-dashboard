export const validateDocType = (id_doc: number) => {
  switch (id_doc) {
    case 1:
      return 'Cedula Ciudadania'
    case 2:
      return 'Pasaporte'
    case 3:
      return 'Cedula Extranjeria'
  
    default:
      return ''
  }
}