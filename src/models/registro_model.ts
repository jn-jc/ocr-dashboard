export interface RegistroModel {
  id_cliente?: number
  apellido_cliente?: string
  email_cliente?: string
  id_tipo_doc?: number
  nombre_cliente?:string
  no_doc_cliente?: string
  fecha_inscripcion?: string
  num_documento?: string
  fecha_registro: string
  id_estado: string
  id_plan?:string
  id_registro: number
  image_data: {
    nombre_archivo: string
    path_archivo: string
    id_usuario: number
  }
}

export interface UpdateSignature {
  id_registro: number
  firma: number
}