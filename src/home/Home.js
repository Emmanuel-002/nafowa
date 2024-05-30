import NavBar from './Appbar';
import Footer from './Footer';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import News from './News';

const Home = () => {
    return(
        <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div>
                <NavBar />
                <Banner />
                <News />
                <About />
                <Services />
            </div>
                <Footer />
        </div>
    )
}

export default Home