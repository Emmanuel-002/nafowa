import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card, Paper, Grid, Container, Box} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import presidentImage from '../images/president.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Banner() {
  const [charLength, setCharLength] = React.useState(250);
  const [value, setValue] = React.useState('...read more')

  const handleExpandClick = (item) => {
    if(value==='...read more'){
      setCharLength(item.length)
      setValue('read less')
    } else if (value==='read less'){
      setCharLength(250)
      setValue('...read more')
    }
  };

  return (
    <Container id='#'>
      <Box sx={{ flexGrow: 1 }} style={{marginTop:'1rem'}}>
      <Grid container>
        <Grid item xs={12} lg={8} style={{color:'#fff', padding:'1rem', backgroundColor:'#1565c0',display:'flex', flexDirection:'column',justifyContent:'space-between', alignItems:'space-between'}}>
        <p style={{textAlign:'justify',backgroundColor:''}}>
        The Nigerian Air Force Officers’ Wives Association is a philanthropic, Non-Governmental Organization
         whose membership is voluntary and open to the wives of all serving Nigerian Air Force officers.  Traditionally, the wife of the incumbent Chief 
         of the Air Staff is the National President of the Association, while the Headquarters of the Association is located in Abuja.  NAFOWA is also 
         very active at all Air Force Command levels and in various Air Force formations throughout the country.  The Association was established in 1968 
         with the primary objective of promoting the socio-cultural and educational well-being of the wider air force community and the general public 
         especially the less-privileged.  
        </p>          
        </Grid>
        <Grid item xs={12} lg={4}>
            <Card>
            <CardMedia
              component="img"
              height="300"
              image={presidentImage}
              alt="Paella dish"
            />
            </Card>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default Banner;