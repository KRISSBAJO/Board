// PaymentPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuffer, faPaypal, faMoneyBillWave, faDiscord, faApple, faIdeal, faFacebook, faGoogle, faGooglePay, faCashApp, faVenmo,  faConfluence,
    faStripe,
   
} from '@fortawesome/free-brands-svg-icons';
import { faToggleOn, faToggleOff, faPlusCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentSettings, setPaymentSettings] = useState({
    acceptPayments: false,
    requireUpfrontPayment: false,
  });

  const handleToggle = (setting) => {
    setPaymentSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Placeholder function for demonstration purposes
  const handleDateChange = (dateType, value) => {
    console.log(dateType, value);
  };
  const PaymentOption = ({ icon, text }) => {
    return (
      <div className="payment-option">
        <FontAwesomeIcon icon={icon} className="payment-icon" />
        <p>{text}</p>
      </div>
    );
  };
  return (
   
          <div className="payment-page">
            <h3>Payment integrations</h3>
            <div className="payment-options">
              <PaymentOption
                icon={faConfluence}
                text="Get paid for your services via Square, CashApp, Apple Pay or Google Pay."
              />
              <PaymentOption
                icon={faStripe}
                text="Collect credit and debit card payments easily at the point of booking."
              />
              <PaymentOption
                icon={faPaypal}
                text="Accept payments conveniently via PayPal, Venmo, credit and debit cards, and more."
              />
            </div>

   

      <h3>Booking Page payments</h3>
      <div className="booking-page-payments">
        <div className="toggle-option">
          <label>Accept Booking Page payments</label>
          <FontAwesomeIcon 
            icon={paymentSettings.acceptPayments ? faToggleOn : faToggleOff}
            className={`toggle ${paymentSettings.acceptPayments ? 'on' : 'off'}`}
            onClick={() => handleToggle('acceptPayments')}
          />
        </div>
        <div className="toggle-option">
          <label>Require payment upfront</label>
          <FontAwesomeIcon 
            icon={paymentSettings.requireUpfrontPayment ? faToggleOn : faToggleOff}
            className={`toggle ${paymentSettings.requireUpfrontPayment ? 'on' : 'off'}`}
            onClick={() => handleToggle('requireUpfrontPayment')}
          />
        </div>
        </div>

      <div className="additional-charges">
        <h4>Would you like to apply additional charges or reductions, like taxes or discounts?</h4>
        <button className="add-charge">
          <FontAwesomeIcon icon={faDiscord} />
          Add charge or reduction
        </button>
      </div>

      <div className="payment-history">
        <h4>Payment history</h4>
        <div className="date-selector">
          <FontAwesomeIcon icon={faFacebook} className="calendar-icon" />
          <input type="date" onChange={(e) => handleDateChange('start', e.target.value)} />
          <input type="date" onChange={(e) => handleDateChange('end', e.target.value)} />
          <button className="generate-report">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
