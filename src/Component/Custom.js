// src/components/CustomCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './Custom.css';

// Import images for carousel
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import selimgc1 from '../assets/images/selimgc1.jpeg'; 
const Custom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={selimgc1} alt="Slide 1" />
        </div>
        <div>
          <img src={home2} alt="Slide 2" />
        </div>
        <div>
          <img src={home3} alt="Slide 3" />
        </div>
        <div>
          <img src={home1} alt="Slide 4" />
        </div>
        <div>
          <img src={home2} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Custom;