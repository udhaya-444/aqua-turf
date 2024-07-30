import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Membership.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const memberships = [
  {
    title: "Basic",
    imageUrl: "https://cdn-icons-png.freepik.com/512/5490/5490548.png",
    features: [
      "Access to booking system",
      "Standard turf slots",
      "Email support",
      "Basic amenities"
    ],
    unavailable: [
      "Priority booking",
      "Discounted rates",
      "Access to premium facilities",
      "Personal trainer access"
    ],
    buttonText: "JOIN NOW",
    buttonColor: "#fcae1e",
  },
  {
    title: "Standard",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRaKWn9XBvj8idOIvlC6uywAETb36kg3c39Stz-sQ2ocC2LM7GK9Y7VWYe6tzDC3R8Og&usqp=CAU",
    features: [
      "Access to booking system",
      "Priority booking",
      "Discounted rates",
      "Access to standard facilities"
    ],
    unavailable: [
      "Access to premium facilities",
      "Personal trainer access"
    ],
    buttonText: "JOIN NOW",
    buttonColor: "#2a5bd7",
  },
  {
    title: "Premium",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5766/5766815.png",
    features: [
      "Access to booking system",
      "Priority booking",
      "Discounted rates",
      "Access to all facilities",
      "Personal trainer access",
      "Exclusive events"
    ],
    unavailable: [],
    buttonText: " JOIN NOW",
    buttonColor: "#e6005c",
  },
];

const MembershipCard = ({ title, imageUrl, features, unavailable, buttonText, buttonColor, onJoinNow }) => (
  <div className="card">
    <img src={imageUrl} alt={`${title} membership`} className="card-image" />
    <h3 className="card-title">{title}</h3>
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index} className="feature">
          <FaCheck className="icon" /> {feature}
        </li>
      ))}
      {unavailable.map((feature, index) => (
        <li key={index} className="feature unavailable">
          <FaTimes className="icon" /> {feature}
        </li>
      ))}
    </ul>
    <button className="shop-button" style={{ backgroundColor: buttonColor }} onClick={onJoinNow}>
      {buttonText}
    </button>
  </div>
);

const Membership = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/payment');
  };

  return (
    <div className="membership-section">
      <h1 className="membership-header">Membership Details</h1>
      <div className="membership-container">
        {memberships.map((membership, index) => (
          <MembershipCard key={index} {...membership} onJoinNow={handleJoinNow} />
        ))}
      </div>
    </div>
  );
};

export default Membership;
