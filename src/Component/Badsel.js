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
    { 
      id: 1, 
      name: 'A2B Turf', 
      location: 'Gandhipuram', 
      amount: '₹1000/hr', 
      rating: 4.5, 
      imgSrc: as3,
      description: 'A premier turf with state-of-the-art facilities, perfect for competitive games and recreational activities.'
    },
    { 
      id: 2, 
      name: 'Arena 18 Turf', 
      location: 'Townhall', 
      amount: '₹80/hr', 
      rating: 3.0, 
      imgSrc: as2,
      description: 'A well-maintained turf offering affordable rates and a friendly environment for casual games.'
    },
    { 
      id: 3, 
      name: 'The Goat Club Turf', 
      location: 'Kovaipudur', 
      amount: '₹90/hr', 
      rating: 4.7, 
      imgSrc: as3,
      description: 'A popular choice among locals for its excellent playing conditions and vibrant community events.'
    },
    { 
      id: 4, 
      name: 'One More Game', 
      location: 'Kunniyamuthur', 
      amount: '₹70/hr', 
      rating: 4.8, 
      imgSrc: as3,
      description: 'An affordable turf with top-notch amenities, ideal for both practice sessions and friendly matches.'
    },
    { 
      id: 5, 
      name: 'Turf Zero', 
      location: 'Gandipuram', 
      amount: '₹85/hr', 
      rating: 4.1, 
      imgSrc: as2,
      description: 'Features a smooth playing surface and great lighting, making it a go-to spot for evening games.'
    },
    { 
      id: 6, 
      name: 'Game Zone', 
      location: 'Sulur', 
      amount: '₹75/hr', 
      rating: 3.9, 
      imgSrc: as3,
      description: 'A family-friendly turf with basic amenities and a welcoming atmosphere for all age groups.'
    },
    { 
      id: 7, 
      name: 'FrreHit Turf', 
      location: 'Gandhipuram', 
      amount: '₹100/hr', 
      rating: 4.5, 
      imgSrc: as3,
      description: 'Known for its excellent facilities and high standards, perfect for serious players and tournaments.'
    },
    { 
      id: 8, 
      name: '404 Arena Turf', 
      location: 'Townhall', 
      amount: '₹80/hr', 
      rating: 4.0, 
      imgSrc: as2,
      description: 'A versatile turf with a great playing surface and competitive pricing, suitable for various events.'
    },
    { 
      id: 9, 
      name: 'Spin City Turf', 
      location: 'Kovaipudur', 
      amount: '₹90/hr', 
      rating: 4.2, 
      imgSrc: as3,
      description: 'A modern turf with high-quality facilities and a reputation for hosting exciting matches and leagues.'
    },
    { 
      id: 10, 
      name: 'Balls and Strikes', 
      location: 'Kunniyamuthur', 
      amount: '₹70/hr', 
      rating: 4.8, 
      imgSrc: as3,
      description: 'Offers a great balance of affordability and quality, with a focus on providing a pleasant experience for players.'
    },
    { 
      id: 11, 
      name: 'Cross Bar', 
      location: 'Gandipuram', 
      amount: '₹85/hr', 
      rating: 4.1, 
      imgSrc: as2,
      description: 'Features well-maintained courts and supportive staff, making it an excellent choice for group events.'
    },
    { 
      id: 12, 
      name: 'Hit-N Run', 
      location: 'Sulur', 
      amount: '₹75/hr', 
      rating: 3.9, 
      imgSrc: as3,
      description: 'Provides a relaxed environment with essential amenities, perfect for informal gatherings and practice sessions.'
    },
    { 
      id: 13, 
      name: 'Goa Turf', 
      location: 'Gandhipuram', 
      amount: '₹100/hr', 
      rating: 4.5, 
      imgSrc: as3,
      description: 'A premium turf with high-end features and a professional setup, ideal for serious sports enthusiasts.'
    },
    { 
      id: 14, 
      name: 'FoodWork Turf', 
      location: 'Townhall', 
      amount: '₹80/hr', 
      rating: 4.0, 
      imgSrc: as2,
      description: 'Combines excellent playing conditions with a focus on customer satisfaction and convenience.'
    },
    { 
      id: 15, 
      name: 'Area 461 Turf', 
      location: 'Kovaipudur', 
      amount: '₹90/hr', 
      rating: 4.2, 
      imgSrc: as3,
      description: 'A highly rated turf known for its quality and reliability, providing a great venue for various events.'
    },
    { 
      id: 16, 
      name: 'Battle On Grass', 
      location: 'Kunniyamuthur', 
      amount: '₹70/hr', 
      rating: 4.8, 
      imgSrc: as3,
      description: 'Offers a competitive edge with its excellent facilities and well-maintained fields, perfect for tournaments.'
    },
    { 
      id: 17, 
      name: 'Sports Street', 
      location: 'Gandipuram', 
      amount: '₹85/hr', 
      rating: 4.1, 
      imgSrc: as2,
      description: 'Features a versatile setup with a focus on providing a great playing experience and excellent service.'
    },
    { 
      id: 18, 
      name: 'Astro Turf', 
      location: 'Sulur', 
      amount: '₹75/hr', 
      rating: 3.9, 
      imgSrc: as3,
      description: 'A well-rounded option with a solid playing surface and reasonable rates, catering to a variety of events.'
    }
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
    <div className="home-i2">
     
      <section className="recommended2">
        <h2>Recommended Pools</h2>
        <div className="book-cards2">
          {displayTurfs.map(turf => (
            <div className="book-card-container2" key={turf.id}>
              <div className="book-card2">
                <img src={turf.imgSrc} alt={turf.name} />
                <p className="book-title2">{turf.name}</p>
                <p className="book-description2">{turf.description}</p>
                <p className="book-author2">{turf.location}</p>
                <div className="book-rating2">
                  <StarRatings
                    rating={turf.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    name='rating'
                  />
                </div>
                <p className="book-amount2">{turf.amount}</p>
                
                  <button className="go-button2" onClick={() => handleViewClick(turf)}>View</button>
              
              </div>
            </div>
          ))}
        </div>
        {filterApplied && <button onClick={handleClearFilter} className="clear-filter-button2">Clear Filter</button>}
      </section>
    </div>
  );
};

export default Badsel;
