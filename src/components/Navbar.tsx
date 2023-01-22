import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css'


export function Navbar() {

  return (
    <List>
      <ListItem disablePadding>
        <NavLink to='/' className={({ isActive }) => !isActive ? 'navbar-item' : 'navbar-active'}>
          <ListItemButton >
            <ListItemIcon className='menuIcon'>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </NavLink>
      </ListItem>
      <ListItem disablePadding>
        <NavLink to='/gestion-clientes' className={({ isActive }) => !isActive ? 'navbar-item' : 'navbar-active'} >
          <ListItemButton >
            <ListItemIcon className='menuIcon' >
              <PersonSearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText inset style={{paddingLeft: '0'}} primary="Gestión Clientes" />
          </ListItemButton>
        </NavLink>
      </ListItem>
    </List>
  );
}