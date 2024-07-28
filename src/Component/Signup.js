// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Signup.css';
// // import  Signupp from '../assets/images/Signupp.jpg'; // Import the image

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     mobileNumber: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let tempErrors = {};
//     if (formData.password.length < 8) {
//       tempErrors.password = 'Password must be at least 8 characters long';
//     }
//     if (!/^\d{10}$/.test(formData.mobileNumber)) {
//       tempErrors.mobileNumber = 'Mobile number must be 10 digits long';
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setErrors({
//       ...errors,
//       [name]: ''
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form Data:', formData);
//       // Here you can add logic to send the form data to the server
//     }
//   };

//   return (
//     <div className="signup-form">
//       <div className="form-content">
//         <h2>Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>
//           <div>
//             <label>Mobile Number:</label>
//             <input
//               type="tel"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               required
//             />
//             {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
//           </div>
//           <button type="submit">Register</button>
//         </form>
//         <div className="login-link">
//           <p>Already registered? </p>
//           <Link to="/login">Login</Link>
//         </div>
//       </div>
//       <div className="form-image">
//         <img src='Signupp.jpg' alt="Signup" /> 
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: ''
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      // Here you can add logic to send the form data to the server
    }
  };

  return (
    <div className="signup-form">
      <div className="form-content">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
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
          <p>Already registered? </p>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="form-image">
        <img src='Signupp.jpg' alt="Signup" /> 
      </div>
    </div>
  );
};

export default Signup;


