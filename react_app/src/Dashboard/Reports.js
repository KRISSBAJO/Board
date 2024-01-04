// Reports.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Reports.css';

const Reports = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState('All services/classes/events');
  const [selectedMember, setSelectedMember] = useState('All team members');

  const services = ['All services/classes/events', 'React Framework', '15 Minutes Meeting', '30 Minutes Meeting', '60 Minutes Meeting'];
  const teamMembers = ['All team members', 'Chris'];

  // Placeholder function to handle generating reports
  const generateReport = () => {
    console.log('Generating report for:', dateRange, selectedService, selectedMember);
  };

  return (
    <div className="reports-container">
      <h3>Reports</h3>
      <div className="date-range-selector">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} />
        <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
        
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => setShowServicesDropdown(!showServicesDropdown)}>
            {selectedService} <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              {services.map((service) => (
                <div key={service} className="dropdown-item" onClick={() => {
                  setSelectedService(service);
                  setShowServicesDropdown(false);
                }}>
                  {service}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => setShowMembersDropdown(!showMembersDropdown)}>
            {selectedMember} <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {showMembersDropdown && (
            <div className="dropdown-menu">
              {teamMembers.map((member) => (
                <div key={member} className="dropdown-item" onClick={() => {
                  setSelectedMember(member);
                  setShowMembersDropdown(false);
                }}>
                  {member}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button className="generate-button" onClick={generateReport}>Generate</button>
      </div>
      
      <div className="report-note">
        <p>Select a date range</p>
        <p>A report will display for this date range when you click ‘Generate’.</p>
      </div>
    </div>
  );
};

export default Reports;
