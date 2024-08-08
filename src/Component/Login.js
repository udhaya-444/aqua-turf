import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

 
 
 
 


    
    try {
      const response = await fetch('http://localhost:8080/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', email); // Save email in localStorage
      console.log('Login response:', data); // Log the response to debug

      if (data.success) {
        // Redirect based on the role
        switch (data.role) {
          case 'ADMIN':
            navigate('/admin'); // Redirect to admin dashboard
            break;
          case 'user':
            navigate('/home'); // Redirect to user dashboard
            break;
          default:
            navigate('/'); // Redirect to a default page if role is unknown
        }
      } else {
        setError('Invalid email or password.'); // Show a general error message
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='linar'>
        <div className="login-form">
          <div className="form-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="username"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
    </div>
  );
};

export default Login;
