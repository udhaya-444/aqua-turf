import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError('Password must be at least eight characters long');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === formData.username && user.password === formData.password);

    if (user) {
      // If login is successful, navigate to the home page.
      navigate('/'); // Navigate to home after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='linar'>
      <div className="login-form">
        <div className="form-content">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
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
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            <p>Not Registered Yet?</p>
            <Link to="/signup" className="signup-button">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;