// DashboardLayout.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardLayout.css'; // Ensure this path is correct
import profilePic1 from '../assets/images/logo.png'; // Update the path as necessary
import profilePic2 from '../assets/images/chris.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClipboardList,
  faUsers,
  faProjectDiagram,
  faCog, faShareAlt, faArrowUp, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';



// DashboardLayout.js
const ClientDashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo-container">
          <img src={profilePic1} alt="LogaXP Logo" className="logo" />
          <span className="title">LogaXP</span>
        </div>
        <nav className="nav-menu">
          <NavLink to="/calendar" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Calendar</span>
          </NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Services</span>
          </NavLink>
          <NavLink to="/customer" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faUsers} />
            <span>Customers</span>
          </NavLink>
          <NavLink to="/integrations" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span>Integrations</span>
          </NavLink>
          <NavLink to="/setting/profile" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </NavLink>
        </nav>
        <div className="action-items">
          <a href="/share" className="action-link share">
            <FontAwesomeIcon icon={faShareAlt} />
            <div className="text-content">
              <span>Share Booking Page</span>
              <span className="booking-link">chriscl22.logaxp.com/chris</span>
            </div>
          </a>
          <a href="/try-pro" className="action-link try-pro">
            <FontAwesomeIcon icon={faArrowUp} />
            Try Premium
          </a>
          <a href="/help-support" className="action-link help-support">
            <FontAwesomeIcon icon={faQuestionCircle} />
            Help & Support
          </a>
        </div>
        <div className="user-info">
          <img src={profilePic2} alt="Profile" className="profile-pic"/>
          <span className="username">Chris</span>
        </div>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default ClientDashboardLayout;
