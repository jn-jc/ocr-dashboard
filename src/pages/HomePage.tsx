import { HomeMenu } from "@/components/HomeMenu"
import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Grid container spacing={3} style={{marginTop: '.4em'}}>
      <Grid item xs={12} className='container-body'>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h1">
            Inicio
          </Typography>
          <Grid item xs={4}>
            <Link to='/gestion-clientes' style={{textDecoration: 'none'}}>
              <HomeMenu />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage