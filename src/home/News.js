import { Container, Card, CardMedia } from "@mui/material";
import communitydev from '../images/communitydev.jpg'
import education from '../images/education.jpg'
import healthcare from '../images/healthcare.jpg'
import { news } from "../utils/Db";
import skillacquisition from '../images/skillacquisition.jpg'
import { useParams, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  
  export default function News() {
    const params = useParams()
    const navigate = useNavigate()

    const handleClick = (event) =>{
      navigate(`/news/${event.target.id}`)
    }

    return (
        <Container maxWidth="xl" style={{marginTop:'1rem'}}>
          <h2 style={{textAlign:'center'}}>Latest News</h2>
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
       {news.map((item) => (
          <SwiperSlide>
            <div className="image" key={item.id}>
              <Card>
            <CardMedia
                    component="img"
                    height="300"
                    image={item.src}
                    alt={item.id}
                    onClick={handleClick} 
                    id={item.id}
                    style={{backgroundSize:'contain'}}
                  />
                  </Card>
        </div>
          </SwiperSlide>
       ))}
    </Swiper>
      </Container>
    );
  }