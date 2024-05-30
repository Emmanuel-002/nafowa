import * as React from 'react';
import NavBar from './home/Appbar';
import Footer from './home/Footer';
import Banner from './home/Banner';
import Services from './home/Services';
import About from './home/About';
import News from './home/News';

function App() {
  return(
    <>
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
    </>
  )
}

export default App;
