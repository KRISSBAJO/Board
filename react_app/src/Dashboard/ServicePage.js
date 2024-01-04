import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCog, faShareAlt, faCut, faChalkboardTeacher, faCar, faCamera, faVideoCamera, faCheckSquare, faSquare, faTimes, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './servicePage.css'; // Make sure this path is correct for your CSS file

const NewServiceCategoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-backdrop">
        <div className="modal">
          <div className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} /> {/* This is the close icon */}
          </div>
          <h3>Create new category</h3>
          <SearchBar icon={faSearch} className="search-icon mb-10" />
          <input type="text" placeholder="Enter category name*" className="category-input" />
          <div className="service-selection">
            <div className="select-all">
              <p>Services (4)</p>
              <FontAwesomeIcon icon={faCheckSquare} /> Select all
            </div>
            <div className="search-box mb-8">
              
            </div>
            {/* List of services */}
            <div className="service-item mb-4">
              <FontAwesomeIcon icon={faSquare} className='mr-2'/> 15 Minutes Meeting
            </div>
            <div className="service-item mb-4">
              <FontAwesomeIcon icon={faCut} className='mr-2' /> Salon Haircut 
            
            </div>
            <div className="service-item mb-4 ">
              <FontAwesomeIcon icon={faChalkboardTeacher} className='mr-2' /> 15 Minutes Meeting
            </div>
            {/* Repeat for other services */}
          </div>
          <div className="modal-actions">
            <button onClick={onClose}>Cancel</button>
            <button>Create</button>
          </div>
        </div>
      </div>
    );
};

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const clearSearch = () => {
      setSearchTerm('');
    };
  
    return (
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchTerm && (
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="clear-icon"
            onClick={clearSearch}
          />
        )}
      </div>
    );
  };
  const ServicePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className="service-page">
      <aside className="service-sidebar">
        <div className="service-categories">
        <h3 className='text-2xl text-gray-900'>Services & classes</h3>
          <div className="categories-list">
            <p>Services (4)</p>
          <button className="add-category-btn" onClick={openModal}>
             <FontAwesomeIcon icon={faPlus} className='mr-2' /> New service category
            </button>
            <NewServiceCategoryModal isOpen={modalOpen} onClose={closeModal} />
            <p>Classes (1)</p>
            <button className="add-category-btn" onClick={openModal}>
             <FontAwesomeIcon icon={faPlus} className='mr-2' /> New class category
            </button>
          </div>
        </div>
      </aside>
      <main className="service-main">
        <header className="service-header">
          <h3>Services (4)</h3>
          <button className="add-service-btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </header>
        <section className="service-list">
          { /* Repeat this block for each service */ }
          <div className="service-item border-l-4 border-red-400 rounded-md ">
            <FontAwesomeIcon icon={faVideoCamera} className="service-icon " />
            <div className="service-info">
              <h3>15 Minutes Meeting</h3>
              <p>15 mins - Free</p>
            </div>
            <button className="share-btn">
              <FontAwesomeIcon icon={faShareAlt} />
              Share
            </button>
            <button className="settings-btn">
              <FontAwesomeIcon icon={faCog} />
            </button>
            
          </div>
          {/* Salon Service */}
        <div className="service-item salon border-l-4 border-green-400 rounded-md">
          <FontAwesomeIcon icon={faCut} className="service-icon" />
          <div className="service-info">
            <h3>Salon Haircut</h3>
            <p>45 mins - $35</p>
          </div>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
        {/* Barbing Service */}
        <div className="service-item barbing border-l-4 border-purple-400 rounded-md">
          <FontAwesomeIcon icon={faCut} className="service-icon " />
          <div className="service-info">
            <h3>Men's Barbering</h3>
            <p>30 mins - $25</p>
          </div>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
        
        {/* Photography Service */}
        <div className="service-item photography border-l-4 border-blue-400 rounded-md">
          <FontAwesomeIcon icon={faCamera} className="service-icon" />
          <div className="service-info">
            <h3>Professional Photoshoot</h3>
            <p>2 hours - $150</p>
          </div>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
        
        {/* Lecture Service */}
        <div className="service-item lecture border-l-4 border-yellow-400 rounded-md">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="service-icon" />
          <div className="service-info">
            <h3>Mathematics Tutoring</h3>
            <p>1 hour - $40</p>
          </div>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
        
        {/* Driving Service */}
        <div className="service-item driving border-l-4 border-pink-400 rounded-md">
          <FontAwesomeIcon icon={faCar} className="service-icon" />
          <div className="service-info">
            <h3>Driving Lessons</h3>
            <p>1 hour - $50</p>
          </div>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePage;
