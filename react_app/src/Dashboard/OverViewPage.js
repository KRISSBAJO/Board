// OverViewPage.js
import React from 'react';
import profilePic2 from '../assets/images/chris.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OverViewPage.css';
import { faFacebookF, faInstagram, faMeetup, faAccusoft, faWordpress, faGoogle, faStripe, faSalesforce, faWix } from '@fortawesome/free-brands-svg-icons';
import BrandDetailsForm from './BrandDetailsForm';

const OverViewPage = () => {
  return (
    <div className="overview-page">
      <section className="booking-page-info">
        <h2>Booking Page</h2>
        <p>Personalize how people schedule appointments with you.</p>
        <div className="booking-url">
          <label>Your Booking Page URL</label>
          <a href="https://chriscl2z.setmore.com" target="_blank" rel="noopener noreferrer">https://chriscl2z.logaxp.com</a>
        </div>

        <div className="connect-apps">
          <p>Connect your favorite apps</p>
          <div className="app-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faMeetup} />
            <FontAwesomeIcon icon={faAccusoft} />
            <FontAwesomeIcon icon={faWordpress} />
            <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faStripe} />
            <FontAwesomeIcon icon={faSalesforce} />
            <FontAwesomeIcon icon={faWix} />
            {/* ... other icons */}
          </div>
        </div>
      </section>

      <BrandDetailsForm profilePic={profilePic2} />
    </div>
  );
};

export default OverViewPage;
