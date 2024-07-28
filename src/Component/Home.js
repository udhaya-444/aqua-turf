// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 

const images = [home1, home2, home3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="home-image"
        />
      </div>
      <div className="content-container">
        <h1>Your Nearest Sports Community</h1>
        <p>Explore our website to find the best spots for your favorite activities. Whether you are looking for a place to play sports, relax, or socialize, we have something for everyone. Get started by browsing through our categories, or use the search function to find exactly what you're looking for. Enjoy your experience!</p>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
