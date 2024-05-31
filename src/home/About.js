import {Card, Grid, Container, Typography, CardMedia, CardContent} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import JoinInnerIcon from '@mui/icons-material/JoinInner';


const about = [
    {   
        title:'Vision',
        image: <RemoveRedEyeIcon style={{width:'100px', height:'100px'}} />,
        detail: `NAFOWA vision is embedded in the Association’s motto which is “Service to Humanity”`
    },
    {   
        title:'Mision',
        image: <FlagCircleIcon style={{width:'100px', height:'100px'}} />,
        detail: `To make life easy and meaningful to its members and the general public at large most especially children and women through various charity projects.
        NAFOWA vision is embedded in the Association’s motto which is “Service to Humanity”`
    },
    {
        title:'Core Values',
        image: <JoinInnerIcon style={{width:'100px', height:'100px'}} />,
        detail: `Our core values are Transparency, Compassion and Service to Humanity`
    },
]

const About = () => {
    return(
        <Container id='about'>
    <Grid container spacing={2}>
    {about.map(item=>(
        <Grid item sm={12} lg={4}>
        <Card  style={{marginTop:'20px', height:'100%', backgroundColor:'#1565c0',color:'#EA5C30',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'space-between'}}>
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