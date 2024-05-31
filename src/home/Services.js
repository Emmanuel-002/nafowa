import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import education from '../images/education.jpg'
import healthcare from '../images/healthcare.jpg'
import skillaquistion from '../images/skillacquisition.jpg'
import communitydev from '../images/communitydev.jpg'

const services = [
    {   
        index:'education',
        src: education,
        alt: "Education",
        description: `NAFOWA operates several schools, including primary, secondary, and vocational schools, which provide quality education to NAF personnel`
    },
    {   
        index:'healthcare',
        src: healthcare,
        alt: "Health Care",
        description: `NAFOWA runs several clinics and hospitals which provide free or subsidized medical care to NAF personnel and their families. 
        The association also organizes health awareness campaigns and programs.`
    },

    {
        index:'skillacquisition',
        src: skillaquistion,
        alt: "Skill Acquisition",
        description: `NAFOWA provides skills acquisition and empowerment programs to NAF personnel's wives and other women in the communities where NAF bases are located. 
        These programs are designed to help women become financially independent and contribute to their families' well-being.`
    },
    {   
        index:'communitydevelopment',
        src: communitydev,
        alt: "Community Development",
        description: `NAFOWA undertakes several community development projects, such as the provision of water boreholes, schools, and hospitals.
        The association also supports orphanages, homes for the elderly, and other charitable organizations.`
    },
]



const Services = () => {
   return(
    <Container id='services' style={{marginTop:'50px'}}>
        <h2 style={{textAlign:'center'}}>Our Services</h2>
    <Grid container spacing={2}>
    {services.map(service=>(
        <Grid item sm={12} lg={6} style={{height:'70vh'}}>
          <Card key={service.index}  style={{marginTop:'10px',height:'100%'}}>
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