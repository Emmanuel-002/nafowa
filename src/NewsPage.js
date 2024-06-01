import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NavBar from './home/Appbar';
import Footer from './Footer';
import { Container, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { news } from './utils/Db';

export default function NewsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [singleNews, setSingleNews] = React.useState(news.find((item,index)=>index===0) || {})
    const [otherNews, setOtherNews] = React.useState(news.filter((item,index)=>index>0) || [])

    const handleClick = (event) =>{
        setSingleNews(news.find(item=>item.id===event.target.id)||{})
        setOtherNews(news.filter(item=>item.id!==event.target.id)||[])
      }

    React.useEffect(()=>{
        setSingleNews(news.find((item,index)=>index===0) || {})
        setOtherNews(news.filter((item,index)=>index>0) || [])
    },[params.id])
  return (
    <React.Fragment>
        <NavBar />
        <Container style={{marginTop:'1rem'}}>
            <Grid container spacing={1}>
                <Grid item md={8} lg={8}>
                   {
                    singleNews && (
                        <Card className='news-feed'>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={singleNews.src}
                                title="green iguana"
                                style={{objectFit:'cover'}}
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {singleNews.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {singleNews.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ) || !singleNews && (
                        <Typography variant="body2" color="text.secondary">
                            News not found
                        </Typography>
                    )
                   } 
                </Grid>
                <Grid className='also-read' item md={4} lg={4}>
                <p style={{textAlign:'center',fontWeight:'bold', color:'#fff', backgroundColor:"#EA5C30", margin:'0', padding:'0.3rem'}}>Also read</p>
                    {otherNews.map(item=>(
                        <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.src}
                            title="green iguana"
                            style={{objectFit:'cover'}}
                            onClick={handleClick} id={item.id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography> */}
                        </CardContent>
                </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
        <Footer />
    </React.Fragment>
  );
}