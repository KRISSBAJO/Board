// HelpAndSupport.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faLifeRing } from '@fortawesome/free-solid-svg-icons';

const HelpAndSupport = () => {
  // Function to handle feedback sharing; Placeholder for demonstration
  const shareFeedback = () => {
    console.log('Sharing feedback...');
    // Logic for feedback sharing
  };

  // Function to handle visiting support center; Placeholder for demonstration
  const visitSupportCenter = () => {
    console.log('Visiting support center...');
    // Logic for redirecting to support center
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need help?</h3>
      <p className="text-gray-600 mb-6">
        Reach out to our 24/7 support team. We're all ears for your questions and feedback.
      </p>
      <div className="flex gap-4">
        <button
          className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          onClick={shareFeedback}
        >
          <FontAwesomeIcon icon={faCommentDots} className="text-lg mr-2" />
          Share feedback
        </button>
        <button
          className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          onClick={visitSupportCenter}
        >
          <FontAwesomeIcon icon={faLifeRing} className="text-lg mr-2" />
          Visit Central Desk
        </button>
      </div>
    </div>
  );
};

export default HelpAndSupport;
