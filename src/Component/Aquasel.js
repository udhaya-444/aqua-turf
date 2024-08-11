import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import './Aquasel.css';

import bad1 from '../assets/images/bad1.jpg'; 
import bad2 from '../assets/images/bad2.jpg'; 
import bad3 from '../assets/images/bad3.jpg'; 
import bad4 from '../assets/images/bad4.jpg'; 
import bad5 from '../assets/images/bad5.jpg'; 
import bad6 from '../assets/images/bad6.jpg'; 


import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaUserCircle } from 'react-icons/fa';
const Aquasel = ({ searchQuery }) => {
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchInput, setSearchInput] = useState(searchQuery || '');
  const navigate = useNavigate();
  const turfs = [
    { id: 1, name: 'A2B Turf', location: 'Gandhipuram', amount: '₹1000/hr', rating: 4.5, description: 'A premier turf with top-notch facilities and well-maintained grounds. ', imgSrc: bad1 },
    { id: 2, name: 'Arena 18 Turf', location: 'Townhall', amount: '₹80/hr', rating: 3.0, description: 'Affordable and well-maintained turf, perfect for casual matches and practice sessions.', imgSrc: bad2},
    { id: 3, name: 'The Goat Club Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.7, description: 'Popular among locals for its excellent surface and friendly atmosphere. ', imgSrc: bad3 },
    { id: 4, name: 'One More Game', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, description: 'Ideal for weekend matches with a spacious field and high-quality lighting..', imgSrc: bad4 },
    { id: 5, name: 'Turf Zero', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, description: 'A top choice for families and friends with comfortable seating and ample parking.', imgSrc: bad5 },
    { id: 6, name: 'Game Zone', location: 'Sulur', amount: '₹75/hr', rating: 3.9, description: 'A vibrant and energetic badminton court featuring well-maintained surfaces and good lighting.', imgSrc: bad6 },
    { id: 7, name: 'FrreHit Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, description: 'High-quality badminton court with excellent facilities and a welcoming atmosphere. ', imgSrc: bad1 },
    { id: 8, name: '404 Arena Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, description: 'A modern badminton court with premium amenities and a well-maintained surface. ', imgSrc: bad1 },
    { id: 9, name: 'Spin City Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, description: 'Popular among local players for its top-notch facilities and friendly staff. ', imgSrc: bad2 },
    { id: 10, name: 'Balls and Strikes', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, description: 'Known for its spacious layout and high-quality surface.', imgSrc: bad3 },
    { id: 11, name: 'Cross Bar', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, description: 'Offers a comfortable and well-maintained court with excellent lighting.', imgSrc: bad4 },
    { id: 12, name: 'Hit-N Run', location: 'Sulur', amount: '₹75/hr', rating: 3.9, description: 'Features a well-kept court with ample space for both singles and doubles play.', imgSrc: bad5 },
    { id: 13, name: 'Goa Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, description: 'A premium badminton court with high-quality facilities and excellent playing surface. ', imgSrc: bad6 },
    { id: 14, name: 'FoodWork Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, description: 'A well-maintained court with modern amenities and a friendly atmosphere. ', imgSrc: bad1 },
    { id: 15, name: 'Area 461 Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, description: 'Known for its high-quality surface and excellent lighting. ', imgSrc: bad2 },
    { id: 16, name: 'Battle On Grass', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, description: 'Features a spacious and well-maintained court. ', imgSrc: bad3 },
    { id: 17, name: 'Sports Street', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, description: 'Offers a high-quality court with good lighting and facilities. ', imgSrc: bad4 },
    { id: 18, name: 'Astro Turf', location: 'Sulur', amount: '₹75/hr', rating: 3.9, description: 'A well-kept badminton court ideal for casual and competitive play. ', imgSrc: bad5 },
    

  ]

  useEffect(() => {
    if (searchQuery) {
      filterTurfs(searchQuery);
    }
  }, [searchQuery]);

  const filterTurfs = (query) => {
    const filtered = turfs.filter(turf =>
      turf.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTurfs(filtered);
    setFilterApplied(true);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterTurfs(searchInput);
    }
  };

  const handleClearFilter = () => {
    setFilteredTurfs([]);
    setFilterApplied(false);
    setSearchInput(''); // Clear search input
  };

  const handleViewClick = (turf) => {
    navigate('/time', { state: { amount: turf.amount } });
  };

  const displayTurfs = filterApplied ? filteredTurfs : turfs;

  return (
    <div className="home-i3">
      <nav className="navbar3">
            <div className="navbar-left3">
                <button className="back-button3">                    <Link to ="/">
                     <FaArrowLeft />
                    </Link>
                </button>             </div>
                <h2>Recommended Cricket and Football Turfs</h2>
                <div className="navbar-center3">
          <div className="search-bar-container3">
          <input
              type="text"
              placeholder="Search"
              className="search-bar3"
              value={searchInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <FaSearch className="search-icon3" onClick={() => filterTurfs(searchInput)} />
          </div>
        </div>
        </nav>
      <section className="recommended3">
        {/* <h2>Recommended Badminton Turf</h2> */}
        <h2></h2>
        <div className="book-cards3">
          {displayTurfs.map(turf => (
            <div className="book-card-container3" key={turf.id}>
              <div className="book-card3">
                <img src={turf.imgSrc} alt={turf.name} />
                <p className="book-title3">{turf.name}</p>
                <p className="book-description3">{turf.description}</p>
                <p className="book-author3">{turf.location}</p>
                <div className="book-rating3">
                  <StarRatings
                    rating={turf.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    name='rating'
                  />
                </div>
                <p className="book-amount3">{turf.amount}</p>
                
                  <button className="go-button3" onClick={() => handleViewClick(turf)}>View</button>
              
              </div>
            </div>
          ))}
        </div>
        {filterApplied && <button onClick={handleClearFilter} className="clear-filter-button3">Clear Filter</button>}
      </section>
    </div>
  );
};

export default Aquasel;