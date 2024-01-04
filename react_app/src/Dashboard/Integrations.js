import React from 'react';
import { ReactComponent as GoogleIcon } from '../assets/images/googleIcon.svg';
import { ReactComponent as MicrosoftIcon } from '../assets/images/microsoftIcon.svg';
import './Integrations.css'; // Assuming you have an Integrations.css file for styling

const Integrations = () => {
  return (
    <div className="integrations-container">
      <div className="integration-item">
        <GoogleIcon className="integration-icon" />
        <div className="integration-details mr-72">
          <h3>Google Calendar</h3>
          <p>Connected to logaxpapp@gmail.com</p>
        </div>
        <button className="disconnect-button ">Disconnect</button>
      </div>

      <div className="integration-item">
        <MicrosoftIcon className="integration-icon" />
        <div className="integration-details mr-64">
          <h3>Office 365 Calendar</h3>
          <p>Office 365, Outlook, Hotmail</p>
        </div>
        <button className="connect-button ">Connect with Microsoft</button>
      </div>

      <div className="link-calendar">
        <h3>Link your calendars</h3>
        <p>Get a link to sync your logaxp calendar to another calendar.</p>
        <button className="get-link-button">Get link</button>
      </div>
    </div>
  );
};

export default Integrations;
