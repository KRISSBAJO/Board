// BookingPolicy.js
import React from 'react';
import './BookingPolicy.css';

const BookingPolicy = () => {
  const policySettings = {
    leadTime: '0 days',
    slotSize: '15 minutes',
    schedulingWindow: '0 months',
    cancellationPolicy: 'Anytime',
  };

  // Dummy function for demonstration purposes
  const handleChange = (event, setting) => {
    console.log(`New value for ${setting}:`, event.target.value);
    // You would typically update the state here
  };

  return (
    <div className="booking-policy">
      <h2>Booking Policies</h2>
      <div className="policy-form">
        <div className="policy-row">
          <label htmlFor="lead-time">Lead time</label>
          <select id="lead-time" value={policySettings.leadTime} onChange={(e) => handleChange(e, 'leadTime')}>
            <option value="0 days">0 days</option>
            <option value="1 day">1 day</option>
            <option value="2 days">2 days</option>
            <option value="3 days">3 days</option>
          </select>
        </div>
        
        <div className="policy-row">
          <label htmlFor="slot-size">Booking slot size</label>
          <select id="slot-size" value={policySettings.slotSize} onChange={(e) => handleChange(e, 'slotSize')}>
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour">1 hour</option>
          </select>
        </div>
        
        <div className="policy-row">
          <label htmlFor="scheduling-window">Scheduling window</label>
          <select id="scheduling-window" value={policySettings.schedulingWindow} onChange={(e) => handleChange(e, 'schedulingWindow')}>
            <option value="0 months">0 months</option>
            <option value="1 month">1 month</option>
            <option value="2 months">2 months</option>
            <option value="3 months">3 months</option>
          </select>
        </div>
        
        <div className="policy-row">
          <label htmlFor="cancellation-policy">Cancellation policy</label>
          <select id="cancellation-policy" value={policySettings.cancellationPolicy} onChange={(e) => handleChange(e, 'cancellationPolicy')}>
            <option value="Anytime">Anytime</option>
            <option value="24 hours before">24 hours before</option>
            <option value="48 hours before">48 hours before</option>
            <option value="72 hours before">72 hours before</option>
          </select>
        </div>
       
      </div>
      <button className="btn btn-save">Save</button>
    </div>
  );
};

export default BookingPolicy;
