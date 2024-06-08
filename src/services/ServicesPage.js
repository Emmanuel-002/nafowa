import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { services } from '../utils/Db';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ServicesPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [singleService, setSingleService] = useState(services.find((item,index)=>item.id===params.id) || {})
    const [otherServices, setOtherServices] = useState(services.filter((item,index)=>item.id!==params.id) || [])
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3

    useEffect(()=>{
        setSingleService(services.find((item,index)=>item.id===params.id) || {})
        setOtherServices(services.filter((item,index)=>item.id!==params.id) || [])
    },[params.id])

    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(otherServices.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(otherServices.length / itemsPerPage))
    },[itemOffset, itemsPerPage, otherServices])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % otherServices.length;
    setItemOffset(newOffset);
  };
  const handleClick = (event) =>{
    navigate(`/services/${event.target.id}`)
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
    <NavBar />
    <Container style={{marginTop:'1rem'}}>
        <Grid container spacing={1} >
                <Grid item sm={12} md={8} lg={8}>
                   {
                    singleService && (
                        <Card className='news-feed'>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={singleService.src}
                                title={singleService.alt}
                                style={{objectFit:'cover'}}
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {singleService.alt}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {singleService.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ) || !singleService && (
                        <Typography variant="body2" color="text.secondary">
                            News not found
                        </Typography>
                    )
                   } 
                </Grid>
                <Grid className='also-read' item container sm={12} md={4} lg={4}>
                <p style={{textAlign:'center',fontWeight:'bold', color:'#fff', backgroundColor:"#EA5C30", margin:'0', padding:'0.3rem', width:'100%'}}>Also read</p>
                    {currentItems.map(item=>(
                        <Card key={item.id} style={{width:'100%', marginBottom:'1rem'}}>
                        <CardMedia
                            sx={{ height: 140, width:'100%' }}
                            image={item.src}
                            title={item.alt}
                            style={{objectFit:'cover'}}
                            onClick={handleClick} id={item.id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.alt}
                            </Typography>
                        </CardContent>
                        </Card>
                    ))}
                    <div item>
                    <ReactPaginate
                        previousLabel="<<"
                        nextLabel=">>"
                        breakLabel="..."
                        pageCount={pageCount}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active'
                    />
                    </div>
                </Grid>
            </Grid>
    </Container>
    </div>
    <Footer />
    </div>
  );
}

export default ServicesPage