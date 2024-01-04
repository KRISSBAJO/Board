// LocationSetup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import LocationSearch from './LocationSearch';
import './LocationSetup.css'; // Ensure you have the corresponding CSS file

const LocationSetup = () => {
  const [activeSection, setActiveSection] = useState('locationService');

  const renderContent = () => {
    switch (activeSection) {
      case 'locationService':
        return (
          <div className="content">
            <button className="btn-allow">Allow Location Service</button>
          </div>
        );
      case 'locationManually':
        return (
            <form className="content">
            <select name="city">
              <option value="">Choose City</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="phoenix">Phoenix</option>
            </select>
            <select name="state">
              <option value="">Choose State</option>
              <option value="newyork">New York</option>
              <option value="california">California</option>
              <option value="illinois">Illinois</option>
              <option value="texas">Texas</option>
              <option value="arizona">Arizona</option>
            </select>
            <select name="country">
              <option value="">Choose Country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
            </select>
            <button type="submit" className="btn-submit">Set Manually</button>
          </form>
          
        );
      case 'closeLocation':
        return (
          <div className="content">
            <select name="closeLocations">
                <option value="">Select Close Location</option>
                <option value="location1">Central Park, NY</option>
                <option value="location2">Golden Gate Park, CA</option>
                <option value="location3">Millennium Park, IL</option>
                <option value="location4">Zilker Park, TX</option>
                <option value="location5">Balboa Park, CA</option>
                </select>
            <button className="btn-pick">Pick Location</button>
          </div>
        );
        case 'searchLocation':
            return (
              <LocationSearch />
            );
          
      default:
        return null;
    }
  };
  return (
    <div className="location-setup">
      <aside className="location-sidebar">
        <button onClick={() => setActiveSection('locationService')} >Set Location by Service</button>
        <button onClick={() => setActiveSection('locationManually')}>Set Location Manually</button>
        <button onClick={() => setActiveSection('closeLocation')}>Pick Close Location</button>
        <button onClick={() => setActiveSection('searchLocation')}>Pick from Search</button>
      </aside>
      {renderContent()}
    </div>
  );
};

export default LocationSetup;
