import React from 'react';
import './AddCustomerModal.css';

const AddCustomerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="add-customer-modal-backdrop">
      <div className="add-customer-modal">
        <header className="modal-header">
          <h1>Add customer</h1>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </header>
        <div className="modal-body">
          <form className="add-customer-form">
            <section className="form-section">
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Full name" />

              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="Phone" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />

              <label htmlFor="companyName">Company name</label>
              <input type="text" id="companyName" name="companyName" placeholder="Company name" />
            </section>

            <section className="form-section">
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                {/* Options will be populated here */}
              </select>

              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Address" />

              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="City" />

              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" placeholder="State" />

              <label htmlFor="zipCode">Zipcode / Postal code</label>
              <input type="text" id="zipCode" name="zipCode" placeholder="Zipcode / Postal code" />
            </section>

            <div className="form-actions">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
