import Footer from "./components/Footer"
import NavBar from "./components/NavBar"


const AboutPage = () => {
    return(
        <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
    <NavBar />
    <div>About</div>
    </div>
    <Footer />
    </div>
    )
}

export default AboutPage