import { Container } from "@mui/material";
import communitydev from '../images/communitydev.jpg'
import education from '../images/education.jpg'
import healthcare from '../images/healthcare.jpg'
import { news } from "../utils/Db";
import skillacquisition from '../images/skillacquisition.jpg'
import { useParams, useNavigate } from "react-router-dom";

  
  export default function News() {
    const params = useParams()
    const navigate = useNavigate()

    const handleClick = (event) =>{
      navigate(`/news/${event.target.id}`)
    }

    return (
        <Container style={{marginTop:'1rem'}}>
          <h2 style={{textAlign:'center'}}>Latest News</h2>
            <div className="gallery"> 
              <div className="inner">
              <div className="wrapper">
                <section style={{ "--speed": `${10000}ms` }}>
                  {news.map((item) => (
                    <div className="image" key={item.id}>
                      <img src={item.src} alt={item.id} onClick={handleClick} id={item.id} />
                    </div>
                  ))}
                </section>
                <section style={{ "--speed": `${10000}ms` }}>
                  {news.map((item) => (
                    <div className="image" key={item.id}>
                      <img src={item.src} alt={item.id} onClick={handleClick} id={item.id} />
                    </div>
                  ))}
                </section>
                <section style={{ "--speed": `${10000}ms` }}>
                  {news.map((item) => (
                    <div className="image" key={item.id}>
                      <img src={item.src} alt={item.id} onClick={handleClick} id={item.id} />
                    </div>
                  ))}
                </section>
            </div>
          </div>
        </div>
      </Container>
    );
  }