import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ReferAFriend = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  const referralLink = "https://yourapp.com/signup"; // Replace with your actual referral link

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000); // Reset state after 2 seconds
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Simplified Scheduling for Everyone</h2>
      <p className="text-center mb-6">Refer a friend to create their own free account. They'll love it.</p>
      <div className="flex gap-4 mb-4">
        <button
          onClick={copyReferralLink}
          className="transition-transform hover:scale-105 bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold flex items-center"
          style={{ transition: 'transform 0.15s ease' }}
        >
          <FontAwesomeIcon icon={faCopy} className="mr-3" />
          Copy Link
        </button>
        <button
          className="transition-transform hover:scale-105 bg-green-400 hover:bg-green-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold flex items-center"
          style={{ transition: 'transform 0.15s ease' }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Send Email
        </button>
      </div>
      {linkCopied && (
        <div className="mt-4 py-2 px-6 bg-blue-800 rounded-md shadow-lg transition-opacity" style={{ opacity: linkCopied ? 1 : 0 }}>
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ReferAFriend;
