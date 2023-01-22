import Grid from '@mui/material/Grid';
import * as React from 'react';
import Logo from "../assets/img/logoCV.svg";
import { Profile } from './Profile';
import { Navbar } from './Navbar';


export function HeaderNavbar() {
  return (

    <header>
      <Grid container spacing={2}>
        <Grid className='logo' item xs={4}>
          <img src={Logo} alt="Logo Cruz Verde" />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid className='avatar' item xs={4}>
          <Profile />
        </Grid>
      </Grid>
      <Grid className='menu' item xs={12}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>
    </header>


  );
}