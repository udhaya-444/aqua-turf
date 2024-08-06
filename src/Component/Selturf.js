import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import './Selturf.css';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import as1 from '../assets/images/as1.jpg'; 
import as2 from '../assets/images/as2.avif';
import col1 from '../assets/images/col1.avif';
import as4 from '../assets/images/as4.jpg';
import as5 from '../assets/images/as5.jpg';
 import { FaArrowLeft, FaSearch, FaUserCircle } from 'react-icons/fa';
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import selimgc3 from '../assets/images/selimgc3.jpeg';
import selimgc4 from '../assets/images/selimgc4.jpeg';
import selimgc5 from '../assets/images/selimgc5.jpeg';
import selimgc6 from '../assets/images/selimgc6.webp';
import { useNavigate } from 'react-router-dom';
const Selturf = ({ searchQuery }) => {
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const navigate = useNavigate();
  const turfs = [
    { id: 1, name: 'A2B Turf', location: 'Gandhipuram', amount: '₹1000/hr', rating: 4.5, description: 'A premier turf with top-notch facilities and well-maintained grounds. Ideal for competitive games and tournaments.', imgSrc: as4 },
    { id: 2, name: 'Arena 18 Turf', location: 'Townhall', amount: '₹80/hr', rating: 3.0, description: 'Affordable and well-maintained turf, perfect for casual matches and practice sessions.', imgSrc: as5 },
    { id: 3, name: 'The Goat Club Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.7, description: 'Popular among locals for its excellent surface and friendly atmosphere. Great for regular play.', imgSrc: selimgc1 },
    { id: 4, name: 'One More Game', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, description: 'Ideal for weekend matches with a spacious field and high-quality lighting. Perfect for evening games.', imgSrc: selimgc5 },
    { id: 5, name: 'Turf Zero', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, description: 'A top choice for families and friends with comfortable seating and ample parking.', imgSrc: as4 },
    { id: 6, name: 'Game Zone', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc4, description: 'A vibrant venue ideal for both cricket and football enthusiasts, offering well-maintained pitches and great facilities.' },
  { id: 7, name: 'FrreHit Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: selimgc5, description: 'Perfect for serious players, this turf offers top-notch amenities and a professional playing environment.' },
  { id: 8, name: '404 Arena Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: as4, description: 'A popular choice for casual games with friends, featuring a well-kept field and comfortable seating.' },
  { id: 9, name: 'Spin City Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: as5, description: 'Known for its excellent pitch quality and friendly staff, this turf is great for competitive matches.' },
  { id: 10, name: 'Balls and Strikes', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: selimgc1, description: 'Offers a fantastic playing surface and amenities, making it a favorite among local teams and players.' },
  { id: 11, name: 'Cross Bar', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: selimgc2, description: 'This turf features a high-quality field and is known for hosting local leagues and events.' },
  { id: 12, name: 'Hit-N Run', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc4, description: 'Ideal for informal matches and practice sessions, with a focus on providing a relaxed environment.' },
  { id: 13, name: 'Goa Turf', location: 'Gandhipuram', amount: '₹100/hr', rating: 4.5, imgSrc: selimgc4, description: 'Offers a premium playing experience with well-maintained facilities and a great location.' },
  { id: 14, name: 'FoodWork Turf', location: 'Townhall', amount: '₹80/hr', rating: 4.0, imgSrc: selimgc5, description: 'A family-friendly turf with excellent amenities, suitable for both cricket and football enthusiasts.' },
  { id: 15, name: 'Area 461 Turf', location: 'Kovaipudur', amount: '₹90/hr', rating: 4.2, imgSrc: as4, description: 'Known for its pristine field and excellent customer service, perfect for serious games and training.' },
  { id: 16, name: 'Battle On Grass', location: 'Kunniyamuthur', amount: '₹70/hr', rating: 4.8, imgSrc: as5, description: 'A popular venue among local teams, offering a top-quality field and great facilities.' },
  { id: 17, name: 'Sports Street', location: 'Gandipuram', amount: '₹85/hr', rating: 4.1, imgSrc: selimgc4, description: 'Offers a great atmosphere and a well-maintained field, ideal for both casual and competitive games.' },
  { id: 18, name: 'Astro Turf', location: 'Sulur', amount: '₹75/hr', rating: 3.9, imgSrc: selimgc6, description: 'A versatile turf with good facilities, suitable for various sports and recreational activities.' }
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
      <nav className="navbar1">
            <div className="navbar-left1">
                <button className="back-button1">                    <Link to ="/">
                     <FaArrowLeft />
                    </Link>
                </button>             </div>
                <div className="navbar-center1">
          <div className="search-bar-container1">
            <input
              type="text"
              placeholder="Search"
              className="search-bar1"
            />
            <FaSearch className="search-icon1" />
          </div>
        </div>
        </nav>
      <section className="recommended1">
        <h2>Recommended Cricket and Football Turfs</h2>
        <div className="book-cards1">
          {displayTurfs.map(turf => (
            <div className="book-card-container1" key={turf.id}>
              <div className="book-card1">
                <img src={turf.imgSrc} alt={turf.name} />
                <p className="book-title1">{turf.name}</p>
                <p className="book-description1">{turf.description}</p>
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

export default Selturf;
