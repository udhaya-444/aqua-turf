import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Book.css';
import home1 from '../assets/images/home1.jpg'; 
import a1 from '../assets/images/a1.webp'; 
import b1 from '../assets/images/b1.jpg'; 

const Book = () => {
  const navigate = useNavigate();
  const categories1 = [
    {
      header: 'Turf Booking Options',
      items: [
        { image: home1, title: 'Football/Cricket Turf', offer: ' Football is a simple game. You play with your heart, your head, and your legs. The sound of the bat hitting the ball is music to the ears', button: '/selturf' },
        { image: b1, title: 'Badminton Court', offer: ' Smash your way to fitness and fun! Ace your game with our top-notch badminton courts! Discover the joy of badminton with our premium facilities.', button: '/Aquasel' },
        { image: a1, title: 'Aqua-Pool', offer: ' Dive into fun and relaxation at our Aqua-Pool. Enjoy a refreshing swim and unwind with family and friends.', button: '/badsel' },
      ],
    },
  ];

  const handleImageClick = (link) => {
    console.log('Image clicked, navigating to:', link);
    if (link) {
      navigate(link);
    }
  };
  

  return (
    <div id="booki">
    <div className="categories1">
      {categories1.map((category, index) => (
        <div key={index} className="category-section turf-booking">
          <h2>{category.header}</h2>
          <div className="cards1">
            {category.items.map((item, idx) => (
              <Card key={idx} className="category-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="category-card-img"
                    onClick={() => handleImageClick(item.link)}
                  />
                  <div className="overlay">
                    <Card.Body className="category-card-body">
                      <Card.Title className="category-card-title">{item.title}</Card.Title>
                      {item.offer && <Card.Text className="category-card-text">{item.offer}</Card.Text>}
                    </Card.Body>
                    <button onClick={() => handleImageClick(item.button)}>EXPLORE</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Book;
