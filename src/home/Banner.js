import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card, Paper, Button, Container, Box} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import Carousel from 'react-material-ui-carousel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Banner() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const items = [
    {   
        src: banner1,
        alt: "Banner 1",
        description: `This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.`
    },
    {   
        src: banner2,
        alt: "Banner 2",
        description: `This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.`
    },

    {
        src: banner3,
        alt: "Banner 3",
        description: `This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.`
    }
]

  return (
    <Container>
         <Box 
            sx={{ flexGrow: 1}}
            style={{marginTop:'20px'}}
        >
              <Item style={{padding:'20px'}}>
                <h2>Nigerian Air Force Officers' Wife Association</h2>
                <span style={{marginBottom:'10px', backgroundColor:'#1565c0', color:'#ffffff', padding:'10px', borderRadius:'5px'}}>Service to Humanity</span>
                </Item>
        </Box>
    <Carousel>
        {
          items.map( (item, i) => (
            <Card key={i}  style={{marginTop:'20px', maxHeight:'70vh'}}>
            <CardMedia
              component="img"
              height="300"
              image={item.src}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.description.slice(0,200)}
              </Typography>
            </CardContent>
          </Card>
          ) )
        }
    </Carousel>
    </Container>
  );
}

export default Banner;