// src/Component/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar.js'
import Video from './Video.jsx'
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import col2 from '../assets/images/col2.jpg'; 
import About from './About';
import Membership from './Membership';
import Book from './Book';
import Selturf from './Selturf';
import Contact from './Contact';
import Footer from './Footer';

const images = [home1, home2, home3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStartedClick = () => {
    navigate('/login'); // Adjust the path as needed
  };

  return (
    <div>
      <Navbar /> 
      <Video />
    <div className="home-container">
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="home-image"
        />
      </div>
      <div className="content-container">
        <h1>WELCOME TO TURFSPLAZ</h1>
        <p>Explore our website to find the best spots for your favorite activities. Whether you are looking for a place to play sports, relax, or socialize, we have something for everyone. Get started by browsing through our categories, or use the search function to find exactly what you're looking for. Enjoy your experience!</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      </div>
      <About/>
    <Book/>
    <Membership/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Home;
