import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareAlt, faEllipsisV, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import './MyServices.css'; // Ensure the CSS file is updated accordingly

const servicesData = [
  {
    id: 1,
    category: 'Services',
    items: [
      { name: '15 Minutes Meeting', duration: '15 mins', price: 'Free' },
      { name: '30 Minutes Meeting', duration: '30 mins', price: 'Free' },
      { name: '60 Minutes Meeting', duration: '60 mins', price: '$900' },
    ],
  },
  {
    id: 2,
    category: 'Classes',
    items: [
      { name: 'React Framework', duration: '120 mins', price: '$1200' },
    ],
  },
  // Add more categories and items as needed
];


const MyServices = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const handleEdit = (itemId) => {
        console.log('Edit item', itemId);
        // Implement edit functionality
        setActiveDropdown(null); // Close dropdown after action
    };

    const handleDelete = (itemId) => {
        console.log('Delete item', itemId);
        // Implement delete functionality
        setActiveDropdown(null); // Close dropdown after action
    };

    return (
        <div className="my-services-layout">
            <aside className="services-sidebar">
                <button className="add-service-btn">
                    <FontAwesomeIcon icon={faPlus} /> Add New Service Class
                </button>
                <button className="add-service-btn">
                    <FontAwesomeIcon icon={faPlus} /> Add Service Category
                </button>
            </aside>
            <main className="services-main-content">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-category  ">
                        <h3>{service.category}</h3>
                        {service.items.map((item) => (
                            <div key={item.name} className="service-item border-l-4 border-lime-500 mb-2 rounded-md">
                                <div className="service-description ml-4">
                                    <span className="service-name">{item.name}</span>
                                    <span className="service-duration">{item.duration}</span>
                                    <span className="service-price">{item.price}</span>
                                </div>
                                <div className="service-actions">
                                    <button className="share-btn">
                                        <FontAwesomeIcon icon={faShareAlt} /> Share
                                    </button>
                                    <button className={`options-btn ${activeDropdown === item.name ? 'active' : ''}`} onClick={() => toggleDropdown(item.name)}>
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                    </button>
                                    {activeDropdown === item.name && (
                                        <div className="dropdown-menu">
                                            <button className="close-dropdown" onClick={() => setActiveDropdown(null)}>
                                                <FontAwesomeIcon icon={faTimes} /> Close
                                            </button>
                                            <button className="dropdown-item" onClick={() => handleEdit(item.name)}>
                                                <FontAwesomeIcon icon={faEdit} /> Edit
                                            </button>
                                            <button className="dropdown-item" onClick={() => handleDelete(item.name)}>
                                                <FontAwesomeIcon icon={faTrash} /> Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </main>
        </div>
    );
};

export default MyServices;
