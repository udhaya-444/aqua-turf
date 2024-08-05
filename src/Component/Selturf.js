import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import './Selturf.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from 'react-router-dom';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import as4 from '../assets/images/as4.jpg';

const Selturf = ({ searchQuery }) => {
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const navigate = useNavigate(); 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6, // Show 6 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false, // Ensure the cards stay in a single line
    variableWidth: true // Allow cards to have variable width
  };

  const turfs = [
    { id: 1, name: 'A2B Turf', location: 'Gandhipuram', amount: '₹1000/hr', rating: 4.5, imgSrc: selimgc1 },
    { id: 2, name: 'Arena 18 Turf', location: 'Townhall', amount: '₹80/hr', rating: 3.0, imgSrc: as4 },
    { id: 3, name: 'The Goat Club Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.7, imgSrc: selimgc2 },
    { id: 4, name: 'One More Game', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: selimgc1 },
    { id: 5, name: 'Turf Zero', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as4 },
    { id: 6, name: 'Game Zone', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc2 },
    { id: 7, name: 'FrreHit Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: selimgc1 },
    { id: 8, name: '404 Arena Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: as4 },
    { id: 9, name: 'Spin City Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: selimgc2 },
    { id: 10, name: 'Balls and Strikes', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: selimgc1 },
    { id: 11, name: 'Cross Bar', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as4 },
    { id: 12, name: 'Hit-N Run', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc2 },
    { id: 13, name: 'Goa Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: selimgc1 },
    { id: 14, name: 'FoodWork Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: as4 },
    { id: 15, name: 'Area 461 Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: selimgc2 },
    { id: 16, name: 'Battle On Grass', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: selimgc1 },
    { id: 17, name: 'Sports Street', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as4 },
    { id: 18, name: 'Astro Turf', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc2 },
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
  const handleViewClick = (turf) => {
    navigate('/time', { state: { amount: turf.amount } });
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = turfs.filter(turf => turf.location.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredTurfs(filtered);
      setFilterApplied(true);
    } else {
      setFilteredTurfs([]);
      setFilterApplied(false);
    }
  }, [searchQuery]);

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
                <p className="book-author">{turf.location}</p>
                <div className="book-rating">
                  <StarRatings
                    rating={turf.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    name='rating'
                  />
                </div>
                <p className="book-amount">{turf.amount}</p>
                <button className="go-button" onClick={() => handleViewClick(turf)}>View</button>
              </div>
            </div>
          ))}
        </Slider>
        {filterApplied && <button onClick={handleClearFilter} className="clear-filter-button">Clear Filter</button>}
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