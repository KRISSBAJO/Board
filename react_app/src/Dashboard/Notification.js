// Notifications.js
import React, { useState } from 'react';
import './Notification.css';

const Notifications = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    myNotifications: 'ALL',
    staffUpdates: {
      confirmations: true,
      changes: false,
      cancellations: false,
    },
    staffReminders: {
      email: true,
      daysBefore: 1,
    },
    customerUpdates: {
      confirmations: true,
      changes: false,
      cancellations: false,
    },
  });

  const handleRadioChange = (e) => {
    setNotificationSettings({
      ...notificationSettings,
      myNotifications: e.target.value,
    });
  };

  const handleCheckboxChange = (section, field) => {
    setNotificationSettings({
      ...notificationSettings,
      [section]: {
        ...notificationSettings[section],
        [field]: !notificationSettings[section][field],
      },
    });
  };

  const handleReminderChange = (e) => {
    setNotificationSettings({
      ...notificationSettings,
      staffReminders: {
        ...notificationSettings.staffReminders,
        daysBefore: e.target.value,
      },
    });
  };

  // Function to save settings (to be implemented)
  const saveSettings = () => {
    console.log(notificationSettings);
    // Logic to save the settings...
  };

  return (
    <div className="notifications-container">
      <h3>My notifications</h3>
      <div className="notification-options">
        <label>
          <input
            type="radio"
            name="myNotifications"
            value="ALL"
            checked={notificationSettings.myNotifications === 'ALL'}
            onChange={handleRadioChange}
          />
          All Connect chats and mentions, plus appointment updates.
        </label>
        <label>
          <input
            type="radio"
            name="myNotifications"
            value="FOCUS"
            checked={notificationSettings.myNotifications === 'FOCUS'}
            onChange={handleRadioChange}
          />
          Focus Mode
        </label>
        <label>
          <input
            type="radio"
            name="myNotifications"
            value="NONE"
            checked={notificationSettings.myNotifications === 'NONE'}
            onChange={handleRadioChange}
          />
          None
        </label>
      </div>

      <h2>Staff</h2>
      <div className="section">
        <h3>Updates</h3>
        <label>
          <input
            type="checkbox"
            checked={notificationSettings.staffUpdates.confirmations}
            onChange={() => handleCheckboxChange('staffUpdates', 'confirmations')}
          />
          Confirmations
        </label>
        {/* Add checkboxes for Changes and Cancellations */}
      </div>

      <div className="section">
        <h3>Reminders</h3>
        <label>
          <input
            type="checkbox"
            checked={notificationSettings.staffReminders.email}
            onChange={() => handleCheckboxChange('staffReminders', 'email')}
          />
          Email
        </label>
        <input
          type="number"
          value={notificationSettings.staffReminders.daysBefore}
          onChange={handleReminderChange}
        />
        <select value={notificationSettings.staffReminders.daysBefore} onChange={handleReminderChange}>
          <option value="1">Days</option>
          <option value="3">Hours</option>
          <option value="4">Minutes</option>
        </select>
      </div>

      <h3>Customer</h3>
      <div className="section">
      <h3>Updates</h3>
  <label>
    <input
      type="checkbox"
      checked={notificationSettings.customerUpdates.confirmations}
      onChange={() => handleCheckboxChange('customerUpdates', 'confirmations')}
    />
    Confirmations
    <span>Automate notifications for new bookings</span>
  </label>
  <label>
    <input
      type="checkbox"
      checked={notificationSettings.customerUpdates.changes}
      onChange={() => handleCheckboxChange('customerUpdates', 'changes')}
    />
    Changes
    <span>Automate notifications for edited or rescheduled bookings</span>
  </label>
  <label>
    <input
      type="checkbox"
      checked={notificationSettings.customerUpdates.cancellations}
      onChange={() => handleCheckboxChange('customerUpdates', 'cancellations')}
    />
    Cancellations
    <span>Automate notifications for cancelled bookings</span>
  </label>
      </div>

      <div className="actions">
        <button className="cancel">Cancel</button>
        <button className="save" onClick={saveSettings}>Save</button>
      </div>
    </div>
  );
};

export default Notifications;
