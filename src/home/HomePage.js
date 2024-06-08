import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Services from './Services';
import About from './About';
import News from './News';
import "./style.css";
import Video from './Video';

const Home = () => {
    return(
        <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div>
                <NavBar />
                <Video />
                <News />
                <About />
                <Services />
            </div>
                <Footer />
        </div>
    )
}

export default Home