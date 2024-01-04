import React, { useState } from 'react';
import './MyProfile.css'; // Make sure you have the corresponding CSS file
import AboutContent from './AboutContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faPlug,
  faConciergeBell,
  faBusinessTime,
  faCoffee,
  faRoad,
  faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons';
import profilePic1 from '../assets/images/chris.jpeg';
import Integrations from './Integrations';
import ClientServices from './ClientServices';
import BusinessHours from './BusinessHours';
import Breaks from './Breaks';
import TimeOff from './TimeOff';
import Locations from './Locations';

const ProfileNav = ({ active, onClick }) => {
  const navItems = [
    { name: 'About', icon: faInfoCircle },
    { name: 'Integrations', icon: faPlug },
    { name: 'ClientServices', icon: faConciergeBell },
    { name: 'Business Hours', icon: faBusinessTime },
    { name: 'Breaks', icon: faCoffee },
    { name: 'Locations', icon: faRoad },
    { name: 'TimeOff', icon: faBroadcastTower },
    // Add the rest of your items here...
  ];

  return (
    <nav className="profile-nav">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`nav-item ${active === item.name ? 'active' : ''}`}
          onClick={() => onClick(item.name)}
        >
          <FontAwesomeIcon icon={item.icon} className='item-icon' />
          {item.name}
        </button>
      ))}
    </nav>
  );
};

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState('About');

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <AboutContent />;
      case 'Integrations':
        return <Integrations />;
      case 'ClientServices': 
        return <ClientServices />;
        case 'Business Hours': 
        return <BusinessHours />;
        case 'Breaks':
        return <Breaks />; 
        case 'TimeOff':
        return <TimeOff />;
        case 'Locations':
        return <Locations />;
      // ... more cases for each section ...
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <img src={profilePic1} alt="Profile" className="profile-pic" />
        <h1>Chris</h1>
        <span>Nashville, TN, US - 9:10 PM</span>
        <ProfileNav active={activeSection} onClick={setActiveSection} />
      </aside>
      <main className="profile-content">
        {renderSection(activeSection)}
      </main>
    </div>
  );
};

export default MyProfile;
