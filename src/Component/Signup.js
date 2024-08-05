import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import log1 from '../assets/images/log1.jpg';

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
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        ...formData,
        username: formData.email // or any unique identifier
      };

      // Check if the email is already registered
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.email === newUser.email);

      if (existingUser) {
        setErrors({ ...errors, api: 'Email is already registered' });
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        if (response.ok) {
          // Store user data in localStorage
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          navigate('/'); // Navigate to home page after successful registration
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
    <div className="signup-container">
      <div className="signup-form">
        <div className="form-content">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>UserName:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
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
        {/* Optional image
        <div className="form-image">
          <img src={log1} alt="Signup" />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
