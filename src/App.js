// src/App.js
import React from 'react';
import './App.css';
import logo from './assets/logo.png';
// import technician from './assets/technician.jpg';
// import cpplus from './assets/cpplus.png';
// import dahua from './assets/dahua.png';
// import hikvision from './assets/hikvision.png';
// import hifocus from './assets/hifocus.png';
// import dlink from './assets/dlink.png';

function App() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className='ms-1'> Subhahani CCTV Solutions</h3>
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => scrollTo('home')}>Home</li>
            <li onClick={() => scrollTo('services')}>Services</li>
            <li onClick={() => scrollTo('about')}>About us</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </nav>
        <button className="buy-btn">Buy now</button>
      </header>

      {/* Home */}
      <section id="home" className="section home-section">
        <div className="left">
          <h2>Our services</h2>
          <h1>See what we do</h1>
          <p>
            We offer a wide range of security and communication solutions,
            including CCTV on Rent, CCTV Installation, CCTV Repair, CCTV AMC.
          </p>
        </div>
        <div className="right">
          {/* <img src={technician} alt="Technician" /> */}
        </div>
      </section>


      {/* Services */}
      <section id="services" className="section services-section">
        <div className="service-container">
          <div className="service-left">
            <img src={logo} alt="Subhahani Logo" className="services-logo" />
            <h2>Our Services</h2>
            <p>
              Subhahani CCTV Solutions offers a variety of cutting-edge security services including:
              CCTV setup, biometric access control, fire alarm systems, and GPS tracking — all with expert installation
              and support tailored to your needs.
            </p>
          </div>
          <div className="service-right">
            <ul>
              <li>📷 CCTV Setup</li>
              <li>🔐 Biometric System</li>
              <li>🔥 Fire Alarm</li>
              <li>📍 GPS Tracking</li>
            </ul>
            <div className="brands">
              <h4>We work with:</h4>
              <div className="brand-logos">
                {/* <img src={cpplus} alt="CP Plus" />
                <img src={dahua} alt="Dahua" />
                <img src={hikvision} alt="Hikvision" />
                <img src={hifocus} alt="Hi-Focus" />
                <img src={dlink} alt="D-Link" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>
          Subhahani CCTV Solutions has been a trusted name in security systems across Andhra Pradesh. We specialize in
          reliable and affordable solutions like CCTV setup, biometric access, and more — backed by expert support.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>📞 Call: <a href="tel:+919490370123">+91 94903 70123</a></p>
        <p>📧 Email: <a href="mailto:contact@subahanicctv.com">contact@subahanicctv.com</a></p>
        <p>📍 Address: 6th Lane, Nehru Nagar, Opp. Chennai Shopping Mall, Ongole</p>
      </section>
    </div>
  );
}

export default App;
