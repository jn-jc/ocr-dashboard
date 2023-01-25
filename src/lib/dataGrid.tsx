import { MenuTable } from "@/components/MenuTable";
import { validateDocType } from "@/utils/validateDataTable";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: 'id_registro',
    headerName: 'ID',
    headerClassName: 'header-datagrid'
  },
  {
    field: 'fecha_registro',
    headerName: 'Fecha envio',
    valueGetter: (params) => {
      return params.value.split('T')[0]
    },
    width: 130,
    headerClassName: 'header-datagrid'
  },
  {
    field: 'id_tipo_doc',
    headerName: 'Tipo documento',
    valueGetter: (params) => {
      if (params.value != undefined) {
        return validateDocType(params.value)
      }
      else return ''
    },
    width: 160,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'num_documento',
    headerName: 'No. Documento',
    width: 140,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'nombre_cliente',
    headerName: 'Nombres',
    width: 220,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'apellido_cliente',
    headerName: 'Apellidos',
    width: 200,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'firma',
    headerName: 'Firma',
    valueGetter(params) {
      return params.row.id_estado != 'Coincide' ? 'No' : 'Sí'
    },
    headerClassName: 'header-datagrid'
    

  },
  {
    field: 'image_data',
    headerName: 'Tienda',
    valueGetter: (params) => {
      return params.value.id_usuario
    },
    headerClassName: 'header-datagrid'

  },
  {
    field: 'id_plan',
    headerName: 'Plan',
    width: 150,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'id_estado',
    headerName: 'Estado',
    width: 130,
    headerClassName: 'header-datagrid'

  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    renderCell: (params: GridRenderCellParams) => {
      return <MenuTable id={params.id} />
    },
    align: "center",
    headerClassName: 'header-datagrid'

  }
]