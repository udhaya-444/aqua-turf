import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.avif';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [userRole, setUserRole] = useState(''); // Manage user role
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    // Set user role if logged in
    if (loggedIn) {
      const role = localStorage.getItem('role');
      setUserRole(role);
    }
  }, []);

  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   onSearch(searchQuery);
  //   navigate('/selturf');
  // };

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
      {isLoggedIn && (
        <div className="user-icon" onClick={handleUserIconClick}>
          <i className="fas fa-user"></i>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/profile">My Profile</Link>
              <Link onClick={handleLogout} className="logout-button">Logout</Link>
            </div>
          )}
        </div>
      )}
      {!isLoggedIn && (
        <div className="user-icon" onClick={handleUserIconClick}>
          <i className="fas fa-user"></i>
          {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
