import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.avif';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    navigate('/selturf');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Turf Logo" />
      </div>
      <div className="title">TurfSplaz</div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#aboutid">About</a></li>
          <li><a href="#booki">Book</a></li>
          <li><a href="#mem">Membership</a></li>
          <li><a href="#con">Contact</a></li>
        
        </ul>
      </div>
      {/* <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Type here to Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <i className="fas fa-search search-icon"></i>
        </button>
      </form> */}
      <div className="user-icon" onClick={handleUserIconClick}>
        <i className="fas fa-user"></i>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/admin">My Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
