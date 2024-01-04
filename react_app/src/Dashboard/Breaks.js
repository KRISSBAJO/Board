import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Breaks.css'; // Make sure to create an accompanying CSS file

const BreakItem = ({ day, breaks, onAddBreak, onRemoveBreak }) => {
  return (
    <div className="break-item">
      <div className="break-day">{day}</div>
      {breaks.length > 0 ? (
        breaks.map((breakTime, index) => (
          <div key={index} className="break-time">
            <span>{breakTime}</span>
            <button onClick={() => onRemoveBreak(day, index)} className="remove-break">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        ))
      ) : (
        <button onClick={() => onAddBreak(day)} className="add-break">
          <FontAwesomeIcon icon={faPlus} />
          Add break
        </button>
      )}
    </div>
  );
};

const Breaks = () => {
  const [breaks, setBreaks] = useState({
    Monday: ['12:00 PM - 1:00 PM'],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const addBreak = (day) => {
    const newBreaks = { ...breaks, [day]: [...breaks[day], 'Add new break time here'] };
    setBreaks(newBreaks);
  };

  const removeBreak = (day, index) => {
    const dayBreaks = [...breaks[day]];
    dayBreaks.splice(index, 1);
    setBreaks({ ...breaks, [day]: dayBreaks });
  };

  return (
    <div className="breaks-container">
      <h2>Breaks</h2>
      {Object.entries(breaks).map(([day, dayBreaks]) => (
        <BreakItem
          key={day}
          day={day}
          breaks={dayBreaks}
          onAddBreak={addBreak}
          onRemoveBreak={removeBreak}
        />
      ))}
    </div>
  );
};

export default Breaks;
