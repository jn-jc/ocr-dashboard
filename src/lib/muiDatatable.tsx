import { MenuTable } from "@/components/MenuTable";
import { validateDocType } from "@/utils/validateDataTable";
import { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";
import { createTheme } from "@mui/material"

export const columns: MUIDataTableColumnDef[] = [
  {
    name: 'id_registro',
    label: 'ID',
  },
  {
    name: 'fecha_registro',
    label: 'Fecha envio',
    options: {
      customBodyRender: (values, tableMeta, updateValue) => {
        return values.split('T')[0]
      },
    }

  },
  {
    name: 'id_tipo_doc',
    label: 'Tipo documento',
    options: {
      customBodyRender: (values, tableMeta, updateValue) => {
        if (values != undefined) {
          return validateDocType(values)
        }
        else return ''
      },
    }


  },
  {
    name: 'num_documento',
    label: 'No. Documento',

  },
  {
    name: 'nombre_cliente',
    label: 'Nombres',

  },
  {
    name: 'apellido_cliente',
    label: 'Apellidos',

  },
  {
    name: 'firma',
    label: 'Firma',
    options: {
      customBodyRender: (values, tableMeta, updateValue) => {
        return tableMeta.rowData[9] != 'Coincide' ? 'No' : 'Sí'
      },
    }

  },
  {
    name: 'image_data',
    label: 'Tienda',
    options: {
      customBodyRender: (values, tableMeta, updateValue) => {
        return values.id_usuario
      },
    }


  },
  {
    name: 'id_plan',
    label: 'Plan',

  },
  {
    name: 'id_estado',
    label: 'Estado',

  },
  {
    name: 'acciones',
    label: 'Acciones',
    options: {
      customBodyRender: (values, tableMeta, updateValue) => {
        return <MenuTable id={tableMeta.rowData[0]} />
      },
      download: false
    },
    
  }
]

export const options: MUIDataTableOptions = {
  filter: true,
  selectableRows: 'none',
  downloadOptions: {
    filterOptions:{
      useDisplayedColumnsOnly: true,
      useDisplayedRowsOnly: true
    }
  },
  sortOrder:{
    name: 'id_registro',
    direction: 'desc'

  }
}

export const muiTableTheme = () => createTheme({
  components: {
    MUIDataTableHead: {
      styleOverrides: {
        main:{
          backgroundColor: 'blue'
        }
      }
    },
    MUIDataTableHeadCell:{
      styleOverrides:{
        root:{
          backgroundColor: '#cbcbcb',
          borderBottom: '1px solid'
        },
        data:{
          fontSize: '.9rem',
          letterSpacing: '0.01071em',
          lineHeight: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'Open Sans'
        }
      }
    }
  }
})
