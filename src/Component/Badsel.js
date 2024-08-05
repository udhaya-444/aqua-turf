import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import './Badsel.css';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import as1 from '../assets/images/as1.jpg'; 
import as2 from '../assets/images/as2.avif';
import as3 from '../assets/images/as3.jpg';
import { useNavigate } from 'react-router-dom';
const Badsel = ({ searchQuery }) => {
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const navigate = useNavigate();
  const turfs = [
    { id: 1, name: 'A2B Turf', location: 'Gandhipuram', amount: '₹1000/hr', rating: 4.5, imgSrc: as1 },
    { id: 2, name: 'Arena 18 Turf', location: 'Townhall', amount: '₹80/hr', rating: 3.0, imgSrc: as2 },
    { id: 3, name: 'The Goat Club Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.7, imgSrc: as3 },
    { id: 4, name: 'One More Game', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: as1 },
    { id: 5, name: 'Turf Zero', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as2 },
    { id: 6, name: 'Game Zone', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: as3},
    { id: 7, name: 'FrreHit Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: as1 },
    { id: 8, name: '404 Arena Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: as2 },
    { id: 9, name: 'Spin City Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: as3 },
    { id: 10, name: 'Balls and Strikes', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: as1 },
    { id: 11, name: 'Cross Bar', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as2 },
    { id: 12, name: 'Hit-N Run', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: as3 },
    { id: 13, name: 'Goa Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: as1 },
    { id: 14, name: 'FoodWork Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: as2 },
    { id: 15, name: 'Area 461 Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: as3 },
    { id: 16, name: 'Battle On Grass', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: as1 },
    { id: 17, name: 'Sports Street', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: as2 },
    { id: 18, name: 'Astro Turf', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: as3 },
  ];



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
  const handleViewClick = (turf) => {
    navigate('/time', { state: { amount: turf.amount } });
  };

  const displayTurfs = filterApplied ? filteredTurfs : turfs;

  return (
    <div className="home-i1">
      <section className="recommended1">
        <h2>Recommended Turfs</h2>
        <div className="book-cards1">
          {displayTurfs.map(turf => (
            <div className="book-card-container1" key={turf.id}>
              <div className="book-card1">
                <img src={turf.imgSrc} alt={turf.name} />
                <p className="book-title1">{turf.name}</p>
                <p className="book-author1">{turf.location}</p>
                <div className="book-rating1">
                  <StarRatings
                    rating={turf.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    name='rating'
                  />
                </div>
                <p className="book-amount1">{turf.amount}</p>
                
                  <button className="go-button1" onClick={() => handleViewClick(turf)}>View</button>
              
              </div>
            </div>
          ))}
        </div>
        {filterApplied && <button onClick={handleClearFilter} className="clear-filter-button1">Clear Filter</button>}
      </section>
    </div>
  );
};

export default Badsel;
