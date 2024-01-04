import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faVideo, faComments, faCreditCard, faCashRegister } from '@fortawesome/free-solid-svg-icons';

const IntegrationCategory = ({ categoryName, integrations }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-800">{categoryName}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {integrations.map((integration, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <FontAwesomeIcon icon={integration.icon} size="2x" className="text-blue-500 mb-3" />
          <div className="flex-grow">
            <h3 className="font-medium text-lg">{integration.name}</h3>
            <p className="text-sm text-gray-600">{integration.description}</p>
          </div>
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-3" />
        </div>
      ))}
    </div>
  </div>
);

const IntegrationItem = () => {
  const videoMeetingIntegrations = [
    { name: 'Capture', description: '1-click video appointments', icon: faVideo },
    { name: 'Zoom', description: 'Add Zoom video links', icon: faVideo },
    { name: 'Google Meet', description: 'Add Google Meet video links', icon: faVideo },
    { name: 'Microsoft Teams', description: 'Add Microsoft Teams video links', icon: faVideo },
    // ...other video meeting integrations
  ];

  const socialMediaIntegrations = [
    { name: 'Facebook', description: 'Booking via Facebook', icon: faComments },
    { name: 'Instagram', description: 'Booking via Instagram', icon: faComments },
    { name: 'Twitter', description: 'Booking via Twitter', icon: faComments},
    { name: 'Google+', description: 'Booking via Google+', icon: faComments}
    // ...other social media integrations
  ];

  const paymentIntegrations = [
    { name: 'Square', description: 'Payments via Square', icon: faCreditCard },
    { name: 'PayPal', description: 'Payments via PayPal', icon: faCreditCard },
    { name: 'Stripe', description: 'Payments via Stripe', icon: faCreditCard },
    { name: 'Cash', description: 'Payments via Cash', icon: faCashRegister }
    // ...other payment integrations
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Integrate your favorite apps</h1>
      <IntegrationCategory categoryName="Video meeting" integrations={videoMeetingIntegrations} />
      <IntegrationCategory categoryName="Social media" integrations={socialMediaIntegrations} />
      <IntegrationCategory categoryName="Payment" integrations={paymentIntegrations} />
    </div>
  );
};

export default IntegrationItem;
