// Customization.js
import React, { useState } from 'react';

const Customization = () => {
  const [customization, setCustomization] = useState({
    preferredLanguage: 'English',
    timeFormat: '12 hours',
    weekStartsOn: 'Monday',
    serviceAndClasses: {
      serviceAndClassPrices: true,
      serviceAndClassDuration: true,
      businessHours: true,
      localTime: true,
      bookAnotherAppointmentButton: true,
      menuBar: false,
    },
    labels: {
      service: '',
      class: '',
      teamMember: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });

  const handleChange = (section, field, value) => {
    setCustomization((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleSave = () => {
    console.log("Save button clicked");
    console.log(customization);
    // Logic to save the data
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded">
      <h3 className="text-xl font-semibold mb-4">Customization</h3>
      <div className="mb-4">
        <h4 className="font-medium text-lg mb-2">General</h4>
        <div className="mb-3">
          <label className="block mb-1">Preferred language</label>
          <select 
            className="form-select block w-full border-gray-300 rounded"
            value={customization.preferredLanguage}
            onChange={(e) => handleChange('customization', 'preferredLanguage', e.target.value)}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block mb-1">Time format</label>
          <select 
            className="form-select block w-full border-gray-300 rounded"
            value={customization.timeFormat}
            onChange={(e) => handleChange('customization', 'timeFormat', e.target.value)}
          >
            <option value="12 hours">12 hours</option>
            <option value="24 hours">24 hours</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-lg mb-2">Services and classes</h4>
        <div className="flex flex-wrap -mx-2">
          {Object.entries(customization.serviceAndClasses).map(([key, value]) => (
            <div key={key} className="px-2 mb-3 w-1/2">
              <label htmlFor={key} className="flex items-center">
                <input
                  id={key}
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={value}
                  onChange={() => handleChange('serviceAndClasses', key, !value)}
                />
                <span className="ml-2">
                  {key.split(/(?=[A-Z])/).join(' ').replace('And', 'and')}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-lg mb-2">Labels</h4>
        <div className="flex flex-wrap -mx-2">
          {Object.keys(customization.labels).map((label) => (
            <div key={label} className="px-2 mb-3 w-1/2">
              <label className="block mb-1">Display '{label}' as</label>
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded"
                value={customization.labels[label]}
                onChange={(e) => handleChange('labels', label, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" onClick={handleCancel}>
          Cancel
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Customization;
