import React, { useState } from 'react';
import './BusinessModal.css';

const BusinessModal = ({ isOpen, onClose, onConfirm, businessInfo }) => {
  const [localBusinessInfo, setLocalBusinessInfo] = useState(businessInfo);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalBusinessInfo({ ...localBusinessInfo, [name]: value });
  };

  const handleSubmit = () => {
    onConfirm(localBusinessInfo);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Business Info</h2>
        {/* Add form fields for each piece of business information */}
        <form onSubmit={handleSubmit}>
          <input name="phone" value={localBusinessInfo.phone} onChange={handleChange} />
          <input name="email" value={localBusinessInfo.email} onChange={handleChange} />
          <input name="website" value={localBusinessInfo.website} onChange={handleChange} />
          <input name="address" value={localBusinessInfo.address} onChange={handleChange} />
          {/* Add other fields here */}
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessModal;
