// Invoices.js
import React, { useState, useEffect } from 'react';
import './Invoices.css';

const Invoices = () => {
  const [customers, setCustomers] = useState([]);

  // Placeholder for fetching data - replace with your API call
  useEffect(() => {
    // Fetch customers and their payment status
    // This is where you would make an API call to get the actual data
    const fetchedCustomers = [
      { name: 'John Doe', paymentStatus: 'Paid', amount: '$100', date: '2023-01-15' },
      { name: 'Jane Smith', paymentStatus: 'Pending', amount: '$150', date: '2023-01-20' },
      // ... more customers
    ];

    setCustomers(fetchedCustomers);
  }, []);

  return (
    <div className="invoices-container">
      <h2>How to Pay Subscriptions</h2>
      <p>To pay for your subscription, please follow these steps:</p>
      <ol>
        <li>Log in to your account.</li>
        <li>Navigate to the 'Billing' section.</li>
        <li>Select the subscription plan.</li>
        <li>Choose your payment method and proceed to payment.</li>
      </ol>

      <h2>Customers Who Made Payment</h2>
      <div className="customer-list">
        {customers.map((customer, index) => (
          <div key={index} className="customer">
            <h3>{customer.name}</h3>
            <p>Status: {customer.paymentStatus}</p>
            <p>Amount: {customer.amount}</p>
            <p>Date: {customer.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
