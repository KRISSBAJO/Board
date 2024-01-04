import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFileImport } from '@fortawesome/free-solid-svg-icons';
import AddCustomerModal from './AddCustomerModal';
import ImportCustomerModal from './ImportCustomerModal';
import './Customer.css';

const CustomerTable = ({ customers }) => (
  <table className="customer-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone Number</th>
        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody>
      {customers.map(customer => (
        <tr key={customer.id}>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.phone_number}</td>
          {/* Add more customer details as needed */}
        </tr>
      ))}
    </tbody>
  </table>
);

const Customers = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const customers = [
      { id: 1, name: "Francis Duke", email: "francis@example.com", address: "123 Main St", phone_number: "123-456-7890"},
      { id: 2, name: "Chris Bajo", email: "chris@example.com", address: "456 Side Ave", phone_number: "987-654-3210"},
      // Add more hardcoded customers as needed
    ];
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const openCustomerModal = () => {
        setCustomerModalOpen(true);
      };

        const closeCustomerModal = () => {
        setCustomerModalOpen(false);
        }
  
    return (
      <div className="customers-page">
        <aside className="customer-sidebar">
          <button className="btn add-customer" onClick={openModal}>
            <FontAwesomeIcon icon={faUserPlus} /> Add customer
          </button>
          <AddCustomerModal isOpen={modalOpen} onClose={closeModal} />
          <button className="btn import-customers" onClick={openCustomerModal}>
            <FontAwesomeIcon icon={faFileImport} /> Import customers
          </button>
         <ImportCustomerModal isOpen={customerModalOpen} onClose={closeCustomerModal} />
          
        </aside>
        <main className="customer-content">
          <h1>Customers</h1>
          <CustomerTable customers={customers} />
        </main>
      </div>
    );
  };
  
  export default Customers;
