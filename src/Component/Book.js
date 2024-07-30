import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Card from 'react-bootstrap/Card';
import './Book.css';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import a1 from '../assets/images/a1.webp'; 
import b1 from '../assets/images/b1.jpg'; 
const Book = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const categories = [
    {
      header: 'Turf Booking Options',
      items: [
        { image: home1, title: 'Football Turf', offer: 'Book now for 20% off', link: '/selturf' },
        { image: b1, title: 'Badminton Court', offer: 'Limited slots available', link: '/Aquasel' },
        { image: a1, title: 'Aqua-Pool', offer: 'Weekend discounts', link: '/badsel' },
      ],
    },
  ];

  const handleImageClick = (link) => {
    if (link) {
      navigate(link); // Navigate to the specified link
    }
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-section turf-booking">
          <h2>{category.header}</h2>
          <div className="cards">
            {category.items.map((item, idx) => (
              <Card key={idx} className="category-card">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="category-card-img"
                  onClick={() => handleImageClick(item.link)} // Add onClick event
                />
                <Card.Body className="category-card-body">
                  <Card.Title className="category-card-title">{item.title}</Card.Title>
                  {item.offer && <Card.Text className="category-card-text">{item.offer}</Card.Text>}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
