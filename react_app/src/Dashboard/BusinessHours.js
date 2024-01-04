import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './BusinessHours.css';

const DayHours = ({ day, hours, onChange, onApplyToAll, enabled, onToggle }) => {
  return (
    <div className={`day-hours ${!enabled ? 'disabled' : ''}`}>
      <div className="day-toggle-label">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => onToggle(day)}
          id={`toggle-${day}`}
        />
        <label htmlFor={`toggle-${day}`}>{day}</label>
      </div>
      <div className="day-time-inputs">
        <input
          type="text"
          placeholder="Start Time"
          value={hours.start}
          onChange={(e) => onChange(day, 'start', e.target.value)}
          disabled={!enabled}
        />
        <span> - </span>
        <input
          type="text"
          placeholder="End Time"
          value={hours.end}
          onChange={(e) => onChange(day, 'end', e.target.value)}
          disabled={!enabled}
        />
      </div>
      {onApplyToAll && enabled && (
        <button onClick={() => onApplyToAll(day)} className="apply-all-btn">
          <FontAwesomeIcon icon={faCopy} />
          Apply to all
        </button>
      )}
    </div>
  );
};

const BusinessHours = () => {
  const [hours, setHours] = useState({
    Monday: { start: '9:00 AM', end: '5:00 PM', enabled: true },
    Tuesday: { start: '9:00 AM', end: '5:00 PM', enabled: true },
    Wednesday: { start: '9:00 AM', end: '5:00 PM', enabled: true },
    Thursday: { start: '9:00 AM', end: '5:00 PM', enabled: true },
    Friday: { start: '9:00 AM', end: '5:00 PM', enabled: true },
  
    Saturday: { start: '', end: '', enabled: false },
    Sunday: { start: '', end: '', enabled: false },
  });

  const handleHoursChange = (day, period, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        [period]: value,
      },
    }));
  };

  const handleToggleDay = (day) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        enabled: !prevHours[day].enabled,
      },
    }));
  };

  const applyToAll = (selectedDay) => {
    const selectedHours = hours[selectedDay];
    const updatedHours = Object.keys(hours).reduce((acc, day) => {
      if (hours[day].enabled) {
        acc[day] = selectedHours;
      }
      return acc;
    }, {});
    setHours(updatedHours);
  };

  return (
    <div className="business-hours-container">
      {Object.entries(hours).map(([day, dayHours]) => (
        <DayHours
          key={day}
          day={day}
          hours={dayHours}
          onChange={handleHoursChange}
          onApplyToAll={day !== 'Saturday' && day !== 'Sunday' ? applyToAll : null}
          enabled={dayHours.enabled}
          onToggle={handleToggleDay}
        />
      ))}
    </div>
  );
};

export default BusinessHours;