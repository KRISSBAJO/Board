import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faUserFriends, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ImportCustomerModal.css';

const ImportCustomerModal = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    if (!isOpen) return null;

    return (
        <div className="import-modal-backdrop">
            <div className="import-modal">
                <div className="import-modal-header">
                    <h3>Import customers?</h3>
                    <button onClick={onClose} className="import-modal-close-btn">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <p>Choose how you want to import your customers</p>
                <div className="import-options">
                    <div
                        className={`import-option ${selectedOption === 'csv' ? 'selected' : ''}`}
                        onClick={() => setSelectedOption('csv')}
                    >
                        <FontAwesomeIcon icon={faFileCsv} className="import-icon text-blue-500" />
                        CSV File
                    </div>
                    <div
                        className={`import-option ${selectedOption === 'google' ? 'selected' : ''}`}
                        onClick={() => setSelectedOption('google')}
                    >
                        <FontAwesomeIcon icon={faUserFriends} className="import-icon text-red-400" />
                        Google contacts
                    </div>
                </div>
                <div className="import-modal-actions">
                    <button className="import-cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="import-continue-btn" disabled={!selectedOption}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default ImportCustomerModal;
