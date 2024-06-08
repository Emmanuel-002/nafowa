import * as React from 'react';
import Home from './home/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AboutPage from './about/AboutPage';
import ServicesPage from './services/ServicesPage';
import AllNewsPage from './news/AllNewsPage';
import LatestNewsPage from './news/LatestNewsPage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/services/:id" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<AllNewsPage />} />
        <Route path="/news/:id" element={<LatestNewsPage />} />

{/* 
        <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
        <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
        <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
        <Route path="/Parentlogin" element={<LoginPage role="Parent" />} />
        <Route path="/Contactus" element={<ContactUs />} />

        <Route path="/Adminregister" element={<AdminRegisterPage />} />

        <Route path='/*' element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
