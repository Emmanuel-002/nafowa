import React, {useState} from 'react'
import 'swiper/css';
import './style.css'
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {executives} from '../utils/Db'
import {Card, Grid, Container, Typography, CardMedia, CardContent} from '@mui/material'




const Executives = () => {
  // const [activeCard, setActiveCard] = useState(false)

  const handleFlip = (event) => {
    if(event.currentTarget.id === 'cardFlip'){
      event.currentTarget.id = ''
    }else{
      event.currentTarget.id = 'cardFlip'
    }
    // setActiveCard(!activeCard)
  }

    return(
    <Container maxWidth='xl' style={{marginTop:'1rem'}}>
      <Grid className='h-screen centered' container spacing={2}>
        {
          executives.map(person=>(
            <Grid 
            onClick={handleFlip} 
            className={`sticky top-0 card ${{/*activeCard*/} ? `cardFlip` : ``}`} 
            style={{width:'100%'}} 
            item sm={12} md={6} lg={3} 
            key={person.id}>
              <Card className='back' style={{backgroundColor:'#1565c0', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'space-between'}}>
                <div style={{textAlign:'center'}}>
                <Typography variant='h5' style={{color:'#EA5C30'}}>
                  {person.appointment}
                </Typography>
                <Typography variant='h6' style={{color:'#EA5C30'}}>
                  {person.name}
                </Typography>
                </div>
                <CardContent style={{color:'#fff',backgroundColor:'#1565c0',textAlign:'center'}}>
                  <Typography variant="body2">
                    {person.about}
                  </Typography>
                </CardContent>
              </Card>

              <Card className='absolute top-0 front' style={{backgroundColor:'#1565c0',textAlign:'center'}}>
              <Typography variant='h5' style={{color:'#fff'}}>
                {person.appointment}
              </Typography>
              <CardMedia
                component="img"
                height="250"
                width={200}
                image={person.image}
                alt={person.appointment}
                style={{backgroundSize:'contain',borderRadius:'50%'}}
              />
              <CardContent style={{height:'100%', color:'#fff'}}>
                <Typography variant="body2">
                  {person.name}
                </Typography>
              </CardContent>
              </Card>
          </Grid>
          ))
        }
      </Grid>
    </Container>
    )
}

export default Executives