
import { Card, Grid, Typography } from '@mui/material';
import LoginForm from '@/components/LoginForm';
import LogoCV from "../assets/img/logoCV-login.svg";



function LoginPage() {
  return (
    <Grid
      className='center-grid'
      container
      spacing={0}
      alignContent='center'
      justifyContent={'center'}
      direction='column'
    >
      <Card className='card-page'>
        <Grid className='logo' container alignContent={'center'} justifyContent='center' item xs={12}>
          <img src={LogoCV} alt="Logo Cruz Verde - Login" />
        </Grid>
        <Typography gutterBottom variant="h1">
          Bienvenido
        </Typography>
        <LoginForm />
      </Card>
    </Grid>
  );

}

export { LoginPage };
