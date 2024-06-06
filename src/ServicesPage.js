import Footer from "./Footer"
import NavBar from "./home/Appbar"


const AboutPage = () => {
    return(
        <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
    <NavBar />
    <div>Services</div>
    </div>
    <Footer />
    </div>
    )
}

export default AboutPage