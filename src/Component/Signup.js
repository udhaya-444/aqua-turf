// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import Navbar from './Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = 'Mobile number must be 10 digits long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        username: formData.username,  // Setting username as email
        email: formData.email,
        password: formData.password,
        pno: formData.mobileNumber,
        role: 'USER'  // Assuming a default role; adjust if needed
      };

      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            navigate('/login'); // Navigate to login page after successful registration
          } else {
            setErrors({ ...errors, api: result.message });
          }
        } else {
          const errorText = await response.text();
          setErrors({ ...errors, api: errorText });
        }
      } catch (error) {
        setErrors({ ...errors, api: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="signup-container">
      <div className="signup-form">
        <div className="form-content">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
           
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.api && <p className="error-message">{errors.api}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div>
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="login-link">
            <p>Already registered?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
