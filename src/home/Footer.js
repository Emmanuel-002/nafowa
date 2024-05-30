import { Typography } from '@mui/material';
import * as React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return(
        <Typography style={{textAlign:'center', backgroundColor:'#1565c0', color:'#ffffff',marginTop:'20px'}}>
            Designed By NAF Alpha Devs<br />
            Copyright &#169; {year} NAFOWA
        </Typography>
    )
}

export default Footer