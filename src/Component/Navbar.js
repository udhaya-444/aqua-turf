import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import home1 from '../assets/images/home1.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={home1} alt="Turf Logo" />
      </div>
      <div className="title">TurfSplaz</div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/categories">Booking</Link></li>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <a href="#" onClick={handleLoginClick}><i className="fas fa-user"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
