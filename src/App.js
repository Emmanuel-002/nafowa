import * as React from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
