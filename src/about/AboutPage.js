import React from 'react';
import Banner from './Banner';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Executives from './Executives';
import Achievements from './Achievements';
import Objectives from './Objectives';

const About = () => {
    return(
        <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
    <NavBar />
    <Banner />
    <Objectives />
    <Achievements />
    <Executives />
    </div>
    <Footer />
    </div>
       
    )
}

export default About