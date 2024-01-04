// AddOn.js
import React, { useState, useMemo } from 'react';
import './AddOn.css';

const addOnData = {
  extraTime: { enabled: false, price: 20, description: '30 extra minutes' },
  premiumService: { enabled: false, price: 50, description: 'Premium service with additional features' },
  giftPackage: { enabled: false, price: 15, description: 'Wrapped gift package' },
  privateSession: { enabled: false, price: 100, description: 'One-on-one private session' },
};

const AddOn = () => {
  const [addOns, setAddOns] = useState(addOnData);

  const handleToggleAddOn = (key) => {
    setAddOns(prevAddOns => ({
      ...prevAddOns,
      [key]: {
        ...prevAddOns[key],
        enabled: !prevAddOns[key].enabled
      }
    }));
  };

  const totalPrice = useMemo(() => {
    return Object.values(addOns).reduce((acc, { enabled, price }) => {
      return acc + (enabled ? price : 0);
    }, 0);
  }, [addOns]);

  return (
    <div className="addon-container">
      <h3>Add-Ons</h3>
      <div className="addon-options">
        {Object.entries(addOns).map(([key, { enabled, price, description }]) => (
          <div key={key} className="addon-item">
            <input
              id={key}
              type="checkbox"
              checked={enabled}
              onChange={() => handleToggleAddOn(key)}
            />
            <label htmlFor={key} className="addon-label">
              <div className="addon-description">
                <span className="addon-title">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="addon-detail">{description} - ${price}</span>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="addon-summary">
        <div className="total-price">
          Total: ${totalPrice}
        </div>
        <button className="addon-save">Save Add-Ons</button>
      </div>
    </div>
  );
};

export default AddOn;
