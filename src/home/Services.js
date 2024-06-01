import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import { services } from '../utils/Db';

const Services = () => {
   return(
    <Container id='services' style={{marginTop:'50px'}}>
        <h2 style={{textAlign:'center'}}>Our Services</h2>
    <Grid container spacing={2}>
    {services.map(service=>(
        <Grid item sm={12} lg={6} style={{height:'70vh'}}>
          <Card className='service-card' key={service.index}  style={{marginTop:'10px',height:'100%'}}>
            <CardMedia
              component="img"
              height="300"
              image={service.src}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {service.description.slice(0,200)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    ))}
  </Grid>
    </Container>
   )
}

export default Services