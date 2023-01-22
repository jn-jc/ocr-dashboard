import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import LogoClientes from "../assets/img/account-search-outline.svg";

export function HomeMenu() {
  return (
    <Card className='cardHome'>
      <CardActionArea>
        <CardMedia className='orange'
          component="img"
          image={LogoClientes}
          alt="Gestión Clientes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gestión Clientes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ir al modulo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}