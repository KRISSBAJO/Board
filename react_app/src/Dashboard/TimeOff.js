import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import './TimeOff.css'; 

const TimeOff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeOffDays, setTimeOffDays] = useState([
    { id: 1, title: 'New Year Break', date: '2024-01-01', toDate: '2025-01-01' },
    { id: 2, title: 'Independence Day', date: '2024-07-04', toDate: '2025-07-04' },
    { id: 3, title: 'Thanksgiving', date: '2024-11-28', toDate: '2025-11-28' },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const removeTimeOffDay = (id) => {
    setTimeOffDays(timeOffDays.filter(day => day.id !== id));
  };

  return (
    <div className="timeoff-container">
      <button className="add-timeoff-btn" onClick={openModal}>Add Time Off</button>

      <table className="timeoff-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>To Date</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {timeOffDays.map(day => (
            <tr key={day.id}>
              <td>{day.title}</td>
              <td>{day.date}</td>
              <td>{day.toDate}</td>
              <td>
                <button className="undo-btn" onClick={() => removeTimeOffDay(day.id)}>
                  <FontAwesomeIcon icon={faUndoAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Time Off</h3>
            <form>
              {/* Your form elements here */}
              <input type="text" placeholder="Title" />
              <input type="date" placeholder="Start Date" />
              <input type="date" placeholder="End Date" />
              <label>
                <input type="checkbox" />
                All Day
              </label>
              <div className="modal-actions">
                <button type="button" onClick={closeModal}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeOff;
