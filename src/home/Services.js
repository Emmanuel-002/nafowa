import { Container } from '@mui/material';
// import Grid from '@mui/material/Grid'; // Grid version 1
import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import { services } from '../utils/Db';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {
  const navigate = useNavigate()
  const handleServices = (event) => {
    console.log(event.target.id)
    navigate(`/services/${event.target.id}`)
    
  }
   return(
    <Container maxWidth="xl" id='services' style={{marginTop:'50px'}}>
        <h2 style={{textAlign:'center'}}>Our Services</h2>
    
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
      spaceBetween={30}
      height={200}
      breakpoints={{
        600:{
          width: 600,
          slidesPerView: 1
        },
        768:{
          width: 768,
          slidesPerView: 2
        },
        1200:{
          width: 1200,
          slidesPerView: 3
        },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={true}
    >
      {services.map(service=>(
              <SwiperSlide key={service.id}>
                <Card onClick={handleServices} className='service-card'  style={{margin:'10px 0',height:'100%'}}>
                  <CardMedia
                    id={service.id}
                    component="img"
                    height="300"
                    image={service.src}
                    alt="Paella dish"
                    style={{backgroundSize:'contain'}}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {`${service.description.slice(0,100)}...`}<span style={{color:'#1565c0'}}>Read more</span>
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
    </Swiper>
    {/* <Grid container spacing={2}> */}
      
    {/* {services.map(service=>(
        <Grid item sm={12} lg={6} style={{height:'70vh'}}>
          <Card onClick={handleServices} className='service-card' key={service.index}  style={{marginTop:'10px',height:'100%'}}>
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
    ))} */}
  {/* </Grid> */}
    </Container>
   )
}

export default Services