import React from "react";
import './AboutContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faGlobe, faVideo
} from '@fortawesome/free-solid-svg-icons';

const AboutContent = () => {
    return (
      <div className="about-content">
        <div className="about-row">
          <FontAwesomeIcon icon={faPhone} />
          <span>(615) 554-3592</span>
        </div>
        <div className="about-row">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>krissbajo@gmail.com</span>
        </div>
        <div className="about-row">
          <FontAwesomeIcon icon={faClock} />
          <span>Today: 9:00 AM - 5:00 PM (CST)</span>
        </div>
        <div className="about-row">
          <FontAwesomeIcon icon={faGlobe} />
          <a href="https://chriscl2z.bookflex.com/chris" target="_blank" rel="noopener noreferrer">
            chriscl2z.bookflex.com/chris
          </a>
        </div>
        <div className="about-row">
          <FontAwesomeIcon icon={faVideo} />
          <a href="https://logaxpcapture.video/chris-URUcD/krissbajo" target="_blank" rel="noopener noreferrer">
          logaxpcapture.video/chris-URUcD/krissbajo
          </a>
        </div>
        {/* Add more rows as needed */}
      </div>
    );
  };

export default AboutContent;
  
 

  