import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './ClientServices.css'; // Make sure to create a corresponding CSS file

const ServiceItem = ({ time, title, price, buffer }) => {
  return (
    <div className="service-item">
      <div className="service-time">
        <FontAwesomeIcon icon={faClock} />
        <span>{time}</span>
      </div>
      <div className="service-info">
        <h4>{title}</h4>
        <p>{price} - {buffer} min buffer</p>
      </div>
      <button className="share-button">
        <FontAwesomeIcon icon={faShareSquare} />
        Share
      </button>
    </div>
  );
};

const ClientServices = () => {
  const services = [
    { time: '15', title: '15 Minutes Meeting', price: 'Free', buffer: '0' },
    { time: '30', title: '30 Minutes Meeting', price: 'Free', buffer: '0' },
    { time: '60', title: '60 Minutes Meeting', price: '$900', buffer: '12' },
    { time: '123', title: 'Web Development', price: '$23', buffer: '12' },
    // Add more services as needed
  ];

  return (
    <div className="client-services-container">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          time={`${service.time} mins`}
          title={service.title}
          price={service.price}
          buffer={service.buffer}
        />
      ))}
    </div>
  );
};

export default ClientServices;
