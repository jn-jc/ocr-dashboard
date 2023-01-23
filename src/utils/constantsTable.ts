import { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables"
import { string } from "yup"

export const defColumns: MUIDataTableColumnDef[] = [
  {
    name: 'id_registro',
    label: 'ID',
  },
  {
    name: 'fecha_registro',
    label: 'Fecha envio',
    options: {
      customBodyRender: (value, tableMeta) => {
        if (tableMeta.columnData.name == 'fecha_registro') {
          let newValue = value.split('T')
          return newValue[0]
        }
        return value
      }
    }
  },
  {
    name: 'id_tipo_doc',
    label: 'Tipo documento',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        if (tableMeta.columnData.name == 'id_tipo_doc') {
          switch (value) {
            case 1: {
              let tipo_doc = 'Cedula ciudadanía'
              return tipo_doc
            }
            case 2: {
              let tipo_doc = 'Pasaport'
              return tipo_doc
            }
            case 3: {
              let tipo_doc = 'Cedula extranjeria'
              return tipo_doc
            }
            default:
              return ''
          }
        }
      }
    }
  },
  {
    name: 'no_doc_cliente',
    label: 'No. Documento'
  },
  {
    name: 'nombre_cliente',
    label: 'Nombres'
  },
  {
    name: 'apellido_cliente',
    label: 'Apellidos'
  },
  {
    name: 'firma',
    label: 'Firma'
  },
  {
    name: 'id_plan',
    label: 'Plan'
  },
  {
    name: 'id_estado',
    label: 'Estado'
  },
  {
    name: 'menu',
    label: 'Acciones'
  }

]

