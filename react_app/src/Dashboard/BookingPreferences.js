// BookingPreferences.js
import React, { useState } from 'react';
import './BookingPreferences.css';

const initialSettings = {
  sections: {
    bookAppointment: true,
    bookClass: true,
    aboutUs: true,
    ourTeam: true,
    services: true,
    classes: true,
  },
  bookingFlow: {
    firstAvailableAppointment: true,
    skipTeamMembers: false,
    provideMultipleServices: true,
    anyTeamMember: true,
    customerLogin: true,
    hideSetmoreBranding: true,
    accordionView: false,
    allowOnlineRescheduling: true,
    allowOnlineCancellations: true,
  },
  contactFields: {
    phone: true,
    email: false,
    address: false,
  }
};

const BookingPreferences = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleCheckboxChange = (section, field) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [field]: !prevSettings[section][field],
      }
    }));
  };

  return (
    <div className="booking-preferences">
      <h3>Booking Preferences</h3>
      
      <section>
        <h4>Visibility to Booking Page visitors?</h4>
        <div className="checkbox-group">
          {Object.entries(settings.sections).map(([key, value]) => (
            <div className="checkbox-control" key={key}>
              <input
                id={`section-${key}`}
                type="checkbox"
                checked={value}
                onChange={() => handleCheckboxChange('sections', key)}
              />
              <label htmlFor={`section-${key}`}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4>Booking Flow</h4>
        <div className="checkbox-group">
          {Object.entries(settings.bookingFlow).map(([key, value]) => (
            <div className="checkbox-control" key={key}>
              <input
                id={`flow-${key}`}
                type="checkbox"
                checked={value}
                onChange={() => handleCheckboxChange('bookingFlow', key)}
              />
              <label htmlFor={`flow-${key}`}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4>Contact Fields</h4>
        <div className="checkbox-group">
          {Object.entries(settings.contactFields).map(([key, value]) => (
            <div className="checkbox-control" key={key}>
              <input
                id={`contact-${key}`}
                type="checkbox"
                checked={value}
                onChange={() => handleCheckboxChange('contactFields', key)}
              />
              <label htmlFor={`contact-${key}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </section>

      <div className="actions">
        <button type="button" className="cancel">Cancel</button>
        <button type="submit" className="save">Save</button>
      </div>
    </div>
  );
};

export default BookingPreferences;
