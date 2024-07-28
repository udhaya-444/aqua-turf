import React from 'react';
import Card from 'react-bootstrap/Card';
import './Book.css';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 

const Book = () => {
  const categories = [
    {
      header: 'Fruits and Vegetables',
      items: [
        { image: home1, title: 'Fresh Fruits', offer: 'Min 30% offer' },
        { image: home2, title: 'Fresh Vegetables', offer: 'Min 30% offer' },
        { image: home3, title: 'Cuts and Exotics', offer: 'Min 30% offer' },
      ],
    },
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-section fruits-vegetables">
          <h2>{category.header}</h2>
          <div className="cards">
            {category.items.map((item, idx) => (
              <Card key={idx} className="category-card">
                <Card.Img variant="top" src={item.image} className="category-card-img" />
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
