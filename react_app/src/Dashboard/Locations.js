import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Locations.css';

const AddLocationModal = ({ isOpen, onClose, onAdd }) => {
    const [locationData, setLocationData] = useState({
      locationName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(locationData);
      setLocationData({
        locationName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      });
      onClose();
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setLocationData({
        ...locationData,
        [name]: value,
      });
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <h2>Add Location</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="locationName" placeholder="Location Name" value={locationData.locationName} onChange={handleInputChange} required />
            <input type="text" name="addressLine1" placeholder="Address Line 1" value={locationData.addressLine1} onChange={handleInputChange} required />
            <input type="text" name="addressLine2" placeholder="Address Line 2" value={locationData.addressLine2} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" value={locationData.city} onChange={handleInputChange} required />
            <input type="text" name="state" placeholder="State / Province / Region" value={locationData.state} onChange={handleInputChange} required />
            <input type="text" name="country" placeholder="Country" value={locationData.country} onChange={handleInputChange} required />
            <input type="text" name="zipCode" placeholder="Zip / Postal Code" value={locationData.zipCode} onChange={handleInputChange} required />
            <div className="modal-actions">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const LocationItem = ({ location, onUpdate, onDelete }) => {
    return (
      <tr>
        <td>{location.name}</td>
        <td>{location.address}</td>
        <td>
          <button onClick={() => onUpdate(location.id)} className="icon-button">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => onDelete(location.id)} className="icon-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
  };
  
  const Locations = () => {
    const [locations, setLocations] = useState([
      { id: 1, name: 'Headquarters', address: '123 Main St, Metropolis, NY' },
      { id: 2, name: 'Branch Office', address: '456 Side St, Gotham, NJ' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    const addLocation = (newLocation) => {
      setLocations([...locations, { id: locations.length + 1, ...newLocation }]);
    };
  
    const deleteLocation = (id) => {
      setLocations(locations.filter(location => location.id !== id));
    };
  
    const updateLocation = (id) => {
      // Placeholder function to handle update logic
      console.log('Update location with id:', id);
    };
  
    return (
      <div className="locations-container">
        <button className="add-location-btn" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} /> Add Location
        </button>
        <table className="locations-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location => (
              <LocationItem key={location.id} location={location} onUpdate={updateLocation} onDelete={deleteLocation} />
            ))}
          </tbody>
        </table>
        <AddLocationModal isOpen={isModalOpen} onClose={closeModal} onAdd={addLocation} />
      </div>
    );
  };
  
  export default Locations;