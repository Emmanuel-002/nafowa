import {Card, Grid, Container, Typography, CardMedia, CardContent} from '@mui/material'
import { about } from '../utils/Db';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  const handleAbout = () => {
    navigate(`/about`)
  }

    return(
        <Container>
          <h2 style={{textAlign:'center'}}>About Us</h2>
    <Grid container spacing={2}>
    {about.map(item=>(
        <Grid item sm={12} lg={4} onClick={handleAbout}>
        <Card className='about-card'  style={{ height:'100%', backgroundColor:'#1565c0',color:'#EA5C30',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'space-between'}}>
               <div>
               <h2 style={{textAlign:'center'}}>{item.title}</h2>
                <div style={{textAlign:'center'}}>
                  {item.image}
                </div>
                </div>
                <CardContent>
                  <Typography variant="body2" color="#fff">
                    {item.detail}
                  </Typography>
                </CardContent>
              </Card>
        </Grid>
    ))}
  </Grid>
    </Container>
    )
}

export default About