import React, { useState } from 'react';
import './TimeSlot.css';

const TimeSlot = () => {
  const [autoTimeSlots, setAutoTimeSlots] = useState({
    start: '09:00',
    end: '17:00',
    interval: '30',
  });
  const [manualTimeSlot, setManualTimeSlot] = useState('');

  const handleAutoChange = (e) => {
    setAutoTimeSlots({ ...autoTimeSlots, [e.target.name]: e.target.value });
  };

  const handleManualChange = (e) => {
    setManualTimeSlot(e.target.value);
  };

  const generateAutoTimeSlots = (e) => {
    e.preventDefault();
    // Logic to generate time slots based on autoTimeSlots state
    console.log('Auto-generating time slots...');
  };

  const addManualTimeSlot = (e) => {
    e.preventDefault();
    // Logic to add a manual time slot based on manualTimeSlot state
    console.log('Adding manual time slot...');
  };

  return (
    <div className="time-slot-container">
      <h1>Auto-generate Time Slots</h1>
      <form className="auto-time-slot-form" onSubmit={generateAutoTimeSlots}>
        <input type="time" name="start" value={autoTimeSlots.start} onChange={handleAutoChange} />
        <input type="time" name="end" value={autoTimeSlots.end} onChange={handleAutoChange} />
        <input type="number" name="interval" placeholder="Interval (minutes)" value={autoTimeSlots.interval} onChange={handleAutoChange} />
        <button type="submit">Generate</button>
      </form>

      <h1>Manually Add Time Slot</h1>
      <form className="manual-time-slot-form" onSubmit={addManualTimeSlot}>
        <input type="text" placeholder="Enter time slot (e.g., 14:00 - 14:30)" value={manualTimeSlot} onChange={handleManualChange} />
        <button type="submit">Add Slot</button>
      </form>
    </div>
  );
};

export default TimeSlot;
