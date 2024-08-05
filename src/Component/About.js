import React from 'react';
import './About.css'; // Import the CSS for styling
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import selimgc3 from '../assets/images/selimgc3.jpeg';
import selimgc4 from '../assets/images/selimgc4.jpeg';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1 className="welcome-text">ABOUT US</h1>
        <p className="about-content">
          Welcome to TurfSplaz, your ultimate destination for booking turf facilities.
          At TurfSplaz, we believe in providing top-notch facilities and a seamless booking experience.
          Explore our range of turfs suited for various sports and activities.
          Our commitment is to offer you the best environment for your sporting needs.
          Join us in our journey towards a more active and enjoyable lifestyle.
          Book your turf with TurfSplaz today!
        </p>
        <div className="stats-box">
          <div className="stat-item">
            <img src={selimgc1} alt="Choose Turf" className="stat-icon" />
            <p className="stat-title">Choose Turf</p>
            <p>Select from a variety of turfs tailored to your needs.</p>
          </div>
          <div className="stat-item">
            <img src={selimgc2} alt="Make Payment" className="stat-icon" />
            <p className="stat-title">Make Payment</p>
            <p>Experience a seamless and secure payment process.</p>
          </div>
          <div className="stat-item">
            <img src={selimgc3} alt="Enjoy Your Game" className="stat-icon" />
            <p className="stat-title">Enjoy Your Game</p>
            <p>Enjoy your game on our top-quality turfs.</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={selimgc1} alt="Turf 1" className="supermarket-image image-1" />
        <img src={selimgc2} alt="Turf 2" className="supermarket-image image-2" />
        <img src={selimgc3} alt="Turf 3" className="supermarket-image image-3" />
        <img src={selimgc4} alt="Turf 4" className="supermarket-image image-4" />
      </div>
    </div>
  );
};

export default About;
