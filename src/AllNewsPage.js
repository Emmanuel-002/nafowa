import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { news } from './utils/Db';
import NavBar from './home/Appbar';
import Footer from './Footer';
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function AllNewsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [singleNews, setSingleNews] = useState(news.find((item,index)=>index===0) || {})
    const [otherNews, setOtherNews] = useState(news.filter((item,index)=>index>0) || [])
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4

    useEffect(()=>{
        setSingleNews(news.find((item,index)=>index===0) || {})
        setOtherNews(news.filter((item,index)=>index>0) || [])
    },[params.id])

    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(otherNews.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(otherNews.length / itemsPerPage))
    },[itemOffset, itemsPerPage, otherNews])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % otherNews.length;
    setItemOffset(newOffset);
  };
  const handleClick = (event) =>{
    setSingleNews(news.find(item=>item.id===event.target.id)||{})
    setOtherNews(news.filter(item=>item.id!==event.target.id)||[])
  }

  return (
    <>
    <NavBar />
    <Container style={{marginTop:'1rem'}}>
        <Grid container spacing={1} >
                <Grid item sm={12} md={8} lg={8}>
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
                <Grid className='also-read' item container sm={12} md={4} lg={4}>
                <p style={{textAlign:'center',fontWeight:'bold', color:'#fff', backgroundColor:"#EA5C30", margin:'0', padding:'0.3rem', width:'100%'}}>Also read</p>
                    {currentItems.map(item=>(
                        <Card style={{width:'100%'}}>
                        <CardMedia
                            sx={{ height: 140, width:'100%' }}
                            image={item.src}
                            title="green iguana"
                            style={{objectFit:'cover'}}
                            onClick={handleClick} id={item.id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                        </CardContent>
                        </Card>
                    ))}
                    <div item>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">>"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="<<"
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
    <Footer />
    </>
  );
}

export default AllNewsPage