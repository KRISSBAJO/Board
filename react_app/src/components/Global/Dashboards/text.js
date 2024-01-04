import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import homeSection from '../images/homeSection.png';
import './homeSection.css';

const HomeSection = () => {
  const iconStyle = {
    fontSize: '2em', // Adjust the size as needed
  };

  return (
    <div className="all-section">
      {/* Home section */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image side */}
          <div className="col-lg-6 mb-3 mb-lg-0">
          <img src={homeSection} alt="LogaXp Online Booking" className="img-fluid rounded" style={{ maxHeight: '600px' }} />
          </div>
          {/* Text side */}
          <div className="col-lg-6">
            <h2 className="display-3 fw-bold text-black">LogaXP Online Booking</h2>
            <p className="lead text-black">Elevate your salon's digital booking experience with LogaXP.</p>
          
          <div className="my-3 text-black">
            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" style={iconStyle} />
            Eliminate client friction – No sign-in, sign-up, or download required.
          </div>
          <div className="my-3 text-black">
          <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" style={iconStyle} />
            Personalize your platform – Sophisticated, customizable booking tailored for you.
          </div>
          <div className="my-3 text-black">
          <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" style={iconStyle} />
            Optimize your schedule – Advanced settings to streamline your operations.
          </div>
          <div className="my-3 text-black">
          <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" style={iconStyle} />
            Seamless integration – Deposits, card on file, and more to enhance client security.
          </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="text-center">
        <div className="stat-item">
          <h2 className="stat-value">24/7</h2>
          <p className="stat-description">ALWAYS-ON BOOKING</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-value">+35%</h2>
          <p className="stat-description">AVG INCREASE IN BOOKINGS</p>
        </div>
        {/* ... (More stat items if needed) */}
      </div>

      {/* Missing text */}
      <div className="text-center mt-5">
        <h2 className="meet-clients-text">MEET CLIENTS WHERE THEY ARE</h2>
      </div>
    </div>
  );
};

export default HomeSection;
