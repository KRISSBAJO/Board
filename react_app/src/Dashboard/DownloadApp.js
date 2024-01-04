import React from 'react';
import mobile from '../assets/images/mobileversion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <div className="download-app-container" style={{ backgroundImage: `url(${mobile})` }}>
      <div className="overlay">
        <div className="text-content">
          <h1>Get the App!</h1>
          <p>Download our app for the best experience</p>
          <button className="download-button">
            <FontAwesomeIcon icon={faDownload} /> Download for iOS and Android
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
