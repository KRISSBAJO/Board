import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChild,
  faPencilAlt,
  faCut,
} from '@fortawesome/free-solid-svg-icons';
import './BookingPageLayout.css'; // Your CSS file for styling

// Import your subcomponents
import Overview from './OverViewPage';
import BookingPolicy from './BookingPolicy';
import BookingPreferences from './BookingPreferences';
import Customization from './Customization';
import AddOn from './AddOn';
import TimeSlot from './TimeSlot';


const BookingNav = ({ active, onClick }) => {
  const navItems = [
    { name: 'Overview', icon: faCheck },
    { name: 'Policies', icon: faChild },
    { name: 'Preferences', icon: faPencilAlt },
    { name: 'Customization', icon: faCut },
    { name: "AddOn", icon: faCut},
    { name: "TimeSlot", icon: faCut}
    // Add more items if necessary...
  ];

  return (
    <nav className="booking-nav">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`navi-item ${active === item.name ? 'active' : ''}`}
          onClick={() => onClick(item.name)}
        >
          <FontAwesomeIcon icon={item.icon} className='mr-2 ' />
          {item.name}
        </button>
      ))}
    </nav>
  );
};

const BookingPageLayout = () => {
  const [activeSection, setActiveSection] = useState('Overview');

  const renderSection = () => {
    console.log('Active Section:', activeSection); 
    switch (activeSection) {
      case 'Overview':
        return <Overview />;
      case 'Policies':
        return <BookingPolicy />;
      case 'Preferences':
        return <BookingPreferences />;
      case 'Customization':
        return <Customization />;
        case 'AddOn':
          return <AddOn />;
          case 'TimeSlot':
            return <TimeSlot />;
      default:
        return <div>Select a section from the navigation.</div>;
    }
  };
  

  return (
    <div className="booking-page-container">
      <aside className="booking-sidebar">
        <BookingNav active={activeSection} onClick={setActiveSection} />
      </aside>
      <main className="booking-content">
        {renderSection(activeSection)}
      </main>
    </div>
  );
};

export default BookingPageLayout;
