// Selfturf.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Selturf.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import selimgc3 from '../assets/images/selimgc3.jpeg';

const Selturf = () => {
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const turfs = [
    { id: 1, name: <b>'Soccer Turf'</b>, location: <b>'Downtown Stadium'</b>, amount: <b>'100/hr'</b>, imgSrc: selimgc1 },
    { id: 2, name: <b>'Cricket Ground'</b>, location: <b>'City Park'</b>, amount: <b>'80/hr'</b>, imgSrc: selimgc3 },
    { id: 3, name: <b>'Hockey Field'</b>, location: <b>'Westside Arena'</b>, amount: <b>'90/hr'</b>, imgSrc: selimgc2 },
    { id: 4, name: <b>'Tennis Court'</b>, location: <b>'East End Club'</b>, amount: <b>'70/hr'</b>, imgSrc: selimgc1 },
    { id: 5, name: <b>'Basketball Court'</b>, location: <b>'Central Gym'</b>, amount: <b>'85/hr'</b>, imgSrc: selimgc3},
    { id: 6, name: <b>'Badminton Court'</b>, location: <b>'North Sports Complex'</b>, amount: <b>'75/hr'</b>, imgSrc: selimgc2 },
  ];

  const categories = [
    { name: 'INDOOR SPORTS', imgSrc: home1 },
    { name: 'OUTDOOR SPORTS', imgSrc: home2 },
    { name: 'ARTIFICIAL TURFS', imgSrc: home3 },
    { name: 'NATURAL GRASS FIELDS', imgSrc: home1 },
    { name: 'MULTIPURPOSE COURTS', imgSrc: home2 },
    { name: 'SPECIAL EVENTS', imgSrc: home3 },
    { name: 'MULTIPURPOSE COURTS', imgSrc: home2 },
    { name: 'SPECIAL EVENTS', imgSrc: home3 }
  ];

  const handleFilterByLocation = (location) => {
    const filtered = turfs.filter(turf => turf.location === location);
    setFilteredTurfs(filtered);
    setFilterApplied(true);
  };

  const handleClearFilter = () => {
    setFilteredTurfs([]);
    setFilterApplied(false);
  };

  const displayTurfs = filterApplied ? filteredTurfs : turfs;

  return (
    <div className="home-i">
      <section className="recommended">
        <h2>Recommended Turfs</h2>
        <Slider {...settings}>
          {displayTurfs.map(turf => (
            <div className="book-card-container" key={turf.id}>
              <div className="book-card">
                <img src={turf.imgSrc} alt={turf.name} />
                <p className="book-title">{turf.name}</p>
                <p className="book-author" onClick={() => handleFilterByLocation(turf.location)}>{turf.location}</p>
                <p className="book-amount">{turf.amount}</p>
                <Link to="/time">
                  <button className="go-button">View</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {filterApplied && <button onClick={handleClearFilter}>Clear Filter</button>}
      </section>
      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="genre-cards">
          {categories.map((category, index) => (
            <div className="genre-card" key={index}>
              <img src={category.imgSrc} alt={category.name} />
              <div className="genre-name">{category.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Selturf;
