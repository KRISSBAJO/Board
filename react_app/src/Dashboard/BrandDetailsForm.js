// BrandDetailsForm.js
import React from 'react';
import './BrandDetailsForm.css';

const BrandDetailsForm = ({ profilePic }) => {
  return (
    <section className="brand-details">
      <div className="profile-image">
        <img src={profilePic} alt="Chris" />
      </div>
      <div className="brand-info">
        <div className="form-row">
          <input type="text" placeholder="Business name" defaultValue="Chris" />
          <input type="text" placeholder="Phone" defaultValue="+1 615 554 3592" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Primary email" defaultValue="krissbajo@gmail.com" />
          <select name="industry">
            <option value="barbershop">Barbershop</option>
            {/* ... other options */}
          </select>
        </div>
        <div className="form-row">
          <select name="currency">
            <option value="USD">United States USD $</option>
            {/* ... other options */}
          </select>
          <input type="text" placeholder="Country" defaultValue="United States" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Address" defaultValue="1108 Berry Street" />
          <input type="text" placeholder="City" defaultValue="Old Hickory" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="State" defaultValue="TN" />
          <input type="text" placeholder="Zipcode / Postal code" defaultValue="37138" />
        </div>
        <textarea placeholder="Short description of your business (recommended)"></textarea>
        <div className="form-actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-save">Save</button>
        </div>
      </div>
    </section>
  );
};

export default BrandDetailsForm;
