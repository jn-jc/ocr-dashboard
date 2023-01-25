import { DataGridRegistros } from "@/components/DataGridRegistros"
import { Card, CardContent, Grid, Typography } from "@mui/material"

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
                <Grid item xs={12} style={{ height: '35em', display: 'flex', width: '99%' }}>
                  <DataGridRegistros />
                </Grid>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}