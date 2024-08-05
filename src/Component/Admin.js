// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    const fetchUsers = JSON.parse(localStorage.getItem('users')) || [];
    const fetchBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const fetchTurfs = JSON.parse(localStorage.getItem('turfs')) || [];
    
    setUsers(fetchUsers);
    setBookings(fetchBookings);
    setTurfs(fetchTurfs);
  }, []);

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="dashboard">
        <div className="dashboard-section">
          <h2>User Management</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <span>{user.firstName} {user.lastName}</span>, 
                <span>{user.email}</span>, 
                <span>{user.mobileNumber}</span>,
                <span>{user.password}</span>
                <button onClick={() => handleDeleteUser(user.id)} className="delete-button">Delete</button>
              </li>
            ))}
          </ul>
          <Link to="/add-user" className="btn">Add New User</Link>
        </div>
        <div className="dashboard-section">
          <h2>Booking Management</h2>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>
                {booking.user} booked {booking.turf} on {booking.date}
              </li>
            ))}
          </ul>
          <Link to="/add-booking" className="btn">Add New Booking</Link>
        </div>
        <div className="dashboard-section">
          <h2>Turf Management</h2>
          <ul>
            {turfs.map((turf, index) => (
              <li key={index}>{turf.name} - {turf.location}</li>
            ))}
          </ul>
          <Link to="/add-turf" className="btn">Add New Turf</Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
