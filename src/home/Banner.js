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
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis quisquam fugiat similique saepe aperiam neque dolorem 
        odio asperiores exercitationem velit, nihil commodi, molestias provident eligendi reiciendis eum! Rerum dolorem ipsum animi libero tempore, 
        similique ab sapiente repellendus explicabo possimus! Molestias rem tempore necessitatibus sed, quos illum quod quidem, velit vero doloremque, 
        in dolorum incidunt. Sapiente provident nihil, quam repellat temporibus eos eius aperiam iusto cupiditate magnam maxime sed tempora recusandae 
        `
    },
    {   
        src: banner2,
        alt: "Banner 2",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },

    {
        src: banner3,
        alt: "Banner 3",
        description: ` harum inventore et, illum deserunt eum dolorem voluptate molestiae maxime nostrum? Culpa eius placeat tempora vel facere cupiditate alias 
        dolore blanditiis nobis, dignissimos voluptas rem, quia, quaerat neque animi aspernatur? Numquam, nostrum quam? Quia autem exercitationem 
        porro sunt facere optio odio, dolorem repellendus qui vitae alias dignissimos, fugiat asperiores temporibus repellat quisquam dolore quae! 
        Et, deserunt. Consequuntur, reprehenderit velit, autem esse vitae veniam ratione facere tempore neque est exercitationem quasi blanditiis 
        fugiat saepe quod! Aperiam nemo hic eaque mollitia vero fuga excepturi! Dignissimos laborum fuga consectetur? Ullam porro, vero iste eos ab 
        ad eaque tempore voluptas fugiat quidem magni, aliquid quam! Esse dolores quaerat, reprehenderit autem iste iure.`
    }
]

  return (
    <Container id='#'>
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