import React, { useState } from 'react';
import './MyBusiness.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faMapMarkerAlt, faClock, faEdit, faIdCard, faDownload } from '@fortawesome/free-solid-svg-icons';
import BusinessModal from './BusinessModal';

const MyBusiness = () => {
  const [activeSection, setActiveSection] = useState('businessDetails');
  const [businessInfo, setBusinessInfo] = useState({
    phone: "(615) 554-3592",
    email: "krissbajo@gmail.com",
    website: "https://chriscl2z.bookflex.com/chris",
    address: "1108 Berry Street, Old Hickory, United States - 37138",
    // Add other business information here
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const updateBusinessInfo = (newInfo) => {
    setBusinessInfo({ ...businessInfo, ...newInfo });
    closeModal();
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'businessDetails':
        return (
          <div className="business-info">
            <h1>Chris</h1>
        <p className="business-category">Barbershop</p>
        <div className="business-details">
          <FontAwesomeIcon icon={faPhone} />
          <span>{businessInfo.phone}</span>
        </div>
        <div className="business-details">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{businessInfo.email}</span>
        </div>
        <div className="business-details">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{businessInfo.website}</span>
        </div>
        <div className="business-details">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{businessInfo.address}</span>
        </div>
        {/* Add other details here */}
        <button onClick={openModal} className="edit-business-btn">
          <FontAwesomeIcon icon={faEdit} /> Edit Business Info
        </button>
        <BusinessModal isOpen={isModalOpen} onClose={closeModal} onConfirm={updateBusinessInfo} businessInfo={businessInfo} />
          </div>
          
        );
      case 'newBusinessCard':
        return (
          <div className="business-card">
            {/* Add content to create and display new business card */}
            <button className="create-card-btn">Create Card</button>
            <button className="download-card-btn">
              <FontAwesomeIcon icon={faDownload} /> Download Card
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mybusiness-container">
      <aside className="business-sidebar">
        <button onClick={() => setActiveSection('businessDetails')}>
          Business Details
        </button>
        <button onClick={() => setActiveSection('newBusinessCard')}>
          Business Card
        </button>
      </aside>
      <main className="content">
        {renderContent()}
      </main>
      <BusinessModal isOpen={isModalOpen} onClose={closeModal} onConfirm={updateBusinessInfo} businessInfo={businessInfo} />
    </div>
  );
};

export default MyBusiness;
