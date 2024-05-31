import { Container } from "@mui/material";
import communitydev from '../images/communitydev.jpg'
import education from '../images/education.jpg'
import healthcare from '../images/healthcare.jpg'
import skillacquisition from '../images/skillacquisition.jpg'

const images = [
  communitydev,
  education,
  healthcare,
  skillacquisition,
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));
  
  export default function News() {
    return (
        <Container style={{marginTop:'1rem'}}>
          <div className="gallery"> 
       <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${5000}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${5000}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${5000}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
    </div>
      </Container>
    );
  }