import { Grid, Typography, Card, CardContent, Button } from "@mui/material"
import { FileDownloadOutlined, FilterAltOutlined } from '@mui/icons-material'
import { TableClientes } from "@/components/TableClientes"

export function AdminClientesPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className='container-body'>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h1">
            Gestion Clientes
          </Typography>
          <Grid item xs={12}>
            <Card className='card-page'>
              <CardContent>
                <Typography className='title-card' variant="h3">
                  Listado de Registros
                </Typography>
                <Grid item md={12} className="button-group">
                  <Grid item md={6} className="list-left">
                    <Button variant="outlined" startIcon={<FileDownloadOutlined />}>
                      Exportar
                    </Button>
                    <Button variant="contained" disableElevation>
                      Gestión multiple
                    </Button>
                  </Grid>
                  <Grid item md={6} className="list-right">
                    <Button variant="outlined" startIcon={<FilterAltOutlined />}>
                      Filtrar
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TableClientes />
                </Grid>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}